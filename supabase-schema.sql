-- Phase 1: Database Schema Setup

-- 1. Content Blocks (for page text overrides and hero sliders)
CREATE TABLE IF NOT EXISTS public.content_blocks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    page TEXT NOT NULL,
    block_key TEXT NOT NULL,
    value TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(page, block_key)
);

-- 2. Blogs
CREATE TABLE IF NOT EXISTS public.blogs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    content TEXT NOT NULL,
    image_url TEXT,
    views_count INTEGER DEFAULT 0 NOT NULL,
    is_published BOOLEAN DEFAULT false NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- If the blogs table already existed, ensure it has the new columns
DO $$
BEGIN
    BEGIN
        ALTER TABLE public.blogs ADD COLUMN slug TEXT UNIQUE;
    EXCEPTION WHEN duplicate_column THEN END;
    BEGIN
        ALTER TABLE public.blogs ADD COLUMN image_url TEXT;
    EXCEPTION WHEN duplicate_column THEN END;
    BEGIN
        ALTER TABLE public.blogs ADD COLUMN views_count INTEGER DEFAULT 0 NOT NULL;
    EXCEPTION WHEN duplicate_column THEN END;
    BEGIN
        ALTER TABLE public.blogs ADD COLUMN is_published BOOLEAN DEFAULT false NOT NULL;
    EXCEPTION WHEN duplicate_column THEN END;
END $$;

-- 3. Forum Topics
CREATE TABLE IF NOT EXISTS public.forum_topics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    category TEXT NOT NULL,
    display_name TEXT NOT NULL,
    user_id UUID, -- Optional: link to auth.users if logged in
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Forum Replies
CREATE TABLE IF NOT EXISTS public.forum_replies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    topic_id UUID NOT NULL REFERENCES public.forum_topics(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    display_name TEXT NOT NULL,
    user_id UUID, -- Optional
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.content_blocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_replies ENABLE ROW LEVEL SECURITY;

-- Policies for Content Blocks
-- Anyone can read
CREATE POLICY "Allow public read-access on content_blocks" ON public.content_blocks FOR SELECT USING (true);
-- Only authenticated admin users can modify
CREATE POLICY "Allow authenticated users to insert content_blocks" ON public.content_blocks FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated users to update content_blocks" ON public.content_blocks FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated users to delete content_blocks" ON public.content_blocks FOR DELETE TO authenticated USING (true);

-- Policies for Blogs
CREATE POLICY "Allow public read-access on blogs" ON public.blogs FOR SELECT USING (true);
CREATE POLICY "Allow authenticated users to insert blogs" ON public.blogs FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated users to update blogs" ON public.blogs FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated users to delete blogs" ON public.blogs FOR DELETE TO authenticated USING (true);

-- Policies for Forum (Allow anonymous users to post, since we don't have user signups yet)
CREATE POLICY "Allow public read-access on forum_topics" ON public.forum_topics FOR SELECT USING (true);
CREATE POLICY "Allow public insert on forum_topics" ON public.forum_topics FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow authenticated users to update forum_topics" ON public.forum_topics FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated users to delete forum_topics" ON public.forum_topics FOR DELETE TO authenticated USING (true);

CREATE POLICY "Allow public read-access on forum_replies" ON public.forum_replies FOR SELECT USING (true);
CREATE POLICY "Allow public insert on forum_replies" ON public.forum_replies FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow authenticated users to update forum_replies" ON public.forum_replies FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated users to delete forum_replies" ON public.forum_replies FOR DELETE TO authenticated USING (true);

-- Functions
-- Function to increment blog views safely
CREATE OR REPLACE FUNCTION increment_blog_view(blog_slug TEXT)
RETURNS void
LANGUAGE sql
AS $$
  UPDATE public.blogs SET views_count = views_count + 1 WHERE slug = blog_slug;
$$;

-- Note: You'll also need to create a public storage bucket named "site-images" in the Supabase Dashboard.
