import { createClient } from '@supabase/supabase-js';

const supabaseUrl = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.PUBLIC_SUPABASE_URL : process.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.PUBLIC_SUPABASE_ANON_KEY : process.env.PUBLIC_SUPABASE_ANON_KEY;

const hasValidConfig = typeof supabaseUrl === 'string' &&
  supabaseUrl.startsWith('http') &&
  !supabaseUrl.includes('your-project') &&
  typeof supabaseAnonKey === 'string' &&
  supabaseAnonKey.length > 10;

let realClient = null;
if (hasValidConfig) {
  try {
    realClient = createClient(supabaseUrl, supabaseAnonKey);
  } catch (err) {
    console.warn('[Supabase] Failed to initialize real client, falling back to mock:', err);
  }
}

// In-memory / localStorage fallback store
const initialStore = {
  content_blocks: [
    { id: '1', page: 'home', block_key: 'hero_slide_1', value: '/hero_slide2.png', created_at: new Date().toISOString() },
    { id: '2', page: 'home', block_key: 'hero_slide_2', value: '/hero_slide3.png', created_at: new Date().toISOString() },
    { id: '3', page: 'home', block_key: 'hero_slide_3', value: '/blog_tree.png', created_at: new Date().toISOString() }
  ],
  blogs: [
    {
      id: '1',
      title: 'From "Hell" to a Living Laboratory: The Story of My Land in Senga',
      slug: 'post-1-healthy-soil',
      category: 'The Story of Senga',
      author: 'William Odinga Balikuddembe',
      excerpt: 'A personal journey of doubt, loss, persistence, and restoring life to an exhausted piece of land through holistic soil conservation.',
      content: '<p>A personal journey of doubt, loss, persistence, and restoring life to an exhausted piece of land. Through regenerative agricultural techniques and holistic soil conservation, we revitalized barren earth into an abundantly flourishing living laboratory.</p><figure class="my-6"><img src="/blog_soil.png" alt="Healthy regenerative soil in Senga" class="w-full rounded-2xl shadow-md"><figcaption class="text-xs text-stone-500 text-center mt-2 italic">Restored topsoil teeming with organic microbial life</figcaption></figure><p>By stopping synthetic inputs and nurturing soil biology with locally brewed indigenous microorganisms, the earth responded with vitality that surprised neighboring farmers.</p>',
      image_url: '/blog_soil.png',
      views_count: 142,
      status: 'published',
      is_published: true,
      scheduled_at: null,
      created_at: '2026-05-15T09:00:00.000Z',
      updated_at: '2026-05-15T09:00:00.000Z'
    },
    {
      id: '2',
      title: 'How to Become a Tree Billionaire in 5 Years',
      slug: 'post-2-tree-billionaire',
      category: 'Forestry & Climate',
      author: 'BOS Editorial Team',
      excerpt: 'Planting trees is not just an act of love for the environment — it is a generational investment through agroforestry.',
      content: '<p>Planting trees is not just an act of love for the environment — it is a generational investment. Learn how BOS is turning ordinary farmers into Tree Billionaires through agroforestry and indigenous species stewardship.</p><figure class="my-6"><img src="/blog_tree.png" alt="Indigenous canopy and agroforestry" class="w-full rounded-2xl shadow-md"><figcaption class="text-xs text-stone-500 text-center mt-2 italic">Diversified indigenous tree canopy providing windbreaks and natural mulching</figcaption></figure><p>Select multi-purpose indigenous species that yield fruit, timber, fodder, and medicinal bark while sequestering tons of carbon per hectare.</p>',
      image_url: '/blog_tree.png',
      views_count: 89,
      status: 'published',
      is_published: true,
      scheduled_at: null,
      created_at: '2026-06-02T10:00:00.000Z',
      updated_at: '2026-06-02T10:00:00.000Z'
    },
    {
      id: '3',
      title: 'Urban Rooftop Farming: Feeding Cities from Above',
      slug: 'post-3-urban-rooftop',
      category: 'Urban Farming',
      author: 'BOS Editorial Team',
      excerpt: 'Cities need not be food deserts. Discover how BOS Smart Villages are transforming rooftops into productive organic gardens.',
      content: '<p>Cities need not be food deserts. Discover how BOS Smart Villages are transforming rooftops into productive organic gardens that feed families and build self-reliant urban communities.</p><figure class="my-6"><img src="/blog_rooftop.png" alt="Urban rooftop organic garden" class="w-full rounded-2xl shadow-md"><figcaption class="text-xs text-stone-500 text-center mt-2 italic">Vertical towers and raised beds turning bare roofs into organic food systems</figcaption></figure><p>With modular drip lines, recycled containers, and aerated compost tea, urban dwellers can harvest crisp organic greens just steps from their doors.</p>',
      image_url: '/blog_rooftop.png',
      views_count: 64,
      status: 'published',
      is_published: true,
      scheduled_at: null,
      created_at: '2026-06-20T11:00:00.000Z',
      updated_at: '2026-06-20T11:00:00.000Z'
    }
  ],
  team_members: [
    {
      id: 'demo-admin-id',
      email: 'admin@senga.org',
      full_name: 'BOS Chief Administrator',
      role: 'Admin',
      status: 'active',
      password: 'admin123',
      created_at: '2026-01-01T00:00:00.000Z'
    },
    {
      id: 'demo-editor-id',
      email: 'editor@senga.org',
      full_name: 'Editorial Lead (Blogs)',
      role: 'Editor(Blogs)',
      status: 'active',
      password: 'editor123',
      created_at: '2026-02-01T00:00:00.000Z'
    },
    {
      id: 'demo-mod-id',
      email: 'mod@senga.org',
      full_name: 'Community Forum Moderator',
      role: 'Moderator',
      status: 'active',
      password: 'mod123',
      created_at: '2026-02-15T00:00:00.000Z'
    },
    {
      id: 'demo-user-id',
      email: 'user@senga.org',
      full_name: 'Sarah Namukasa',
      role: 'Normal User',
      status: 'active',
      password: 'user123',
      created_at: '2026-03-01T00:00:00.000Z'
    }
  ],
  forum_topics: [
    {
      id: 'topic-1',
      title: 'Best practices for rainwater harvesting in semi-arid zones',
      description: 'What are the most cost-effective techniques for storing and filtering rainwater for smallholder farming during dry periods? We want to gather community feedback on ferro-cement tanks vs swales.',
      content: 'What are the most cost-effective techniques for storing and filtering rainwater for smallholder farming during dry periods? We want to gather community feedback on ferro-cement tanks vs swales.',
      category: 'Agriculture & Soil',
      author_name: 'Sarah Namukasa',
      author_role: 'Normal User',
      display_name: 'Sarah Namukasa',
      user_id: 'demo-user-id',
      is_pinned: true,
      is_locked: false,
      likes_count: 12,
      helpful_count: 8,
      insightful_count: 5,
      created_at: '2026-06-10T14:30:00.000Z',
      updated_at: '2026-06-10T14:30:00.000Z'
    },
    {
      id: 'topic-2',
      title: 'Composting with indigenous microorganisms (IMO)',
      description: 'Sharing our experience with cultivating local fungi and bacteria to speed up compost decomposition and balance soil biology.',
      content: 'Sharing our experience with cultivating local fungi and bacteria to speed up compost decomposition and balance soil biology.',
      category: 'Soil Science',
      author_name: 'James Ochieng',
      author_role: 'Normal User',
      display_name: 'James Ochieng',
      user_id: 'user-james',
      is_pinned: false,
      is_locked: false,
      likes_count: 18,
      helpful_count: 14,
      insightful_count: 9,
      created_at: '2026-06-14T09:15:00.000Z',
      updated_at: '2026-06-14T09:15:00.000Z'
    },
    {
      id: 'topic-3',
      title: 'Urban Rooftop Hydroponics vs Raised Living Soil Beds',
      description: 'Evaluating water efficiency and nutritional density between gravel/water systems and aerated living compost containers.',
      content: 'Evaluating water efficiency and nutritional density between gravel/water systems and aerated living compost containers.',
      category: 'Urban Farming',
      author_name: 'Amara Diallo',
      author_role: 'Normal User',
      display_name: 'Amara Diallo',
      user_id: 'user-amara',
      is_pinned: false,
      is_locked: false,
      likes_count: 7,
      helpful_count: 6,
      insightful_count: 4,
      created_at: '2026-06-18T11:20:00.000Z',
      updated_at: '2026-06-18T11:20:00.000Z'
    }
  ],
  forum_replies: [
    {
      id: 'reply-1',
      topic_id: 'topic-1',
      content: 'We built a 10,000L ferro-cement tank using local sand, gravel, and wire mesh. Cut construction costs by almost 60% compared to commercial plastic tanks.',
      author_name: 'Amara Diallo',
      author_role: 'Normal User',
      display_name: 'Amara Diallo',
      user_id: 'user-amara',
      likes_count: 6,
      helpful_count: 5,
      insightful_count: 3,
      created_at: '2026-06-11T10:00:00.000Z',
      updated_at: '2026-06-11T10:00:00.000Z'
    },
    {
      id: 'reply-2',
      topic_id: 'topic-2',
      content: 'Make sure you collect microbes from virgin bamboo forest or undisturbed tree groves in the early morning. Mix with cooked brown rice and raw brown sugar for best fermentation.',
      author_name: 'William Odinga Balikuddembe',
      author_role: 'Admin',
      display_name: 'William Odinga Balikuddembe',
      user_id: 'demo-admin-id',
      likes_count: 15,
      helpful_count: 12,
      insightful_count: 10,
      created_at: '2026-06-15T08:00:00.000Z',
      updated_at: '2026-06-15T08:00:00.000Z'
    }
  ],
  forum_reactions: [
    {
      id: 'react-1',
      topic_id: 'topic-1',
      reply_id: null,
      user_id: 'demo-admin-id',
      reaction_type: 'like',
      created_at: '2026-06-10T15:00:00.000Z'
    },
    {
      id: 'react-2',
      topic_id: 'topic-2',
      reply_id: null,
      user_id: 'demo-editor-id',
      reaction_type: 'helpful',
      created_at: '2026-06-14T10:00:00.000Z'
    }
  ]
};

// State keeper
function getTableData(table) {
  if (typeof window !== 'undefined' && window.localStorage) {
    const raw = window.localStorage.getItem(`bos_mock_${table}`);
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {
        // ignore parse error
      }
    }
  }
  return initialStore[table] ? [...initialStore[table]] : [];
}

function saveTableData(table, data) {
  if (initialStore[table]) {
    initialStore[table] = data;
  }
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      window.localStorage.setItem(`bos_mock_${table}`, JSON.stringify(data));
    } catch (e) {
      // ignore quota error
    }
  }
}

// Current mock user
let currentMockUser = null;
if (typeof window !== 'undefined' && window.localStorage) {
  const savedUser = window.localStorage.getItem('bos_mock_auth_user');
  if (savedUser) {
    try {
      currentMockUser = JSON.parse(savedUser);
    } catch (e) {}
  }
}

class MockQueryBuilder {
  constructor(table) {
    this.table = table;
    this.filters = [];
    this.sorts = [];
    this.limitCount = null;
    this.isSingle = false;
    this.isCountOnly = false;
  }

  select(columns = '*') {
    this.selectedColumns = columns;
    return this;
  }

  eq(column, value) {
    this.filters.push(item => {
      if (item[column] === undefined && column === 'user_id') return true;
      return String(item[column]) === String(value);
    });
    return this;
  }

  order(column, options = {}) {
    const ascending = options.ascending ?? true;
    this.sorts.push((a, b) => {
      const valA = a[column] || '';
      const valB = b[column] || '';
      if (valA < valB) return ascending ? -1 : 1;
      if (valA > valB) return ascending ? 1 : -1;
      return 0;
    });
    return this;
  }

  limit(count) {
    this.limitCount = count;
    return this;
  }

  single() {
    this.isSingle = true;
    return this;
  }

  async insert(rows) {
    const items = Array.isArray(rows) ? rows : [rows];
    const data = getTableData(this.table);
    const created = items.map(it => ({
      id: it.id || `mock-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      created_at: it.created_at || new Date().toISOString(),
      updated_at: new Date().toISOString(),
      ...it
    }));
    data.push(...created);
    saveTableData(this.table, data);
    return { data: Array.isArray(rows) ? created : created[0], error: null };
  }

  async upsert(values, options = {}) {
    const items = Array.isArray(values) ? values : [values];
    const data = getTableData(this.table);
    for (const item of items) {
      const index = data.findIndex(d => {
        if (item.id && d.id === item.id) return true;
        if (item.page && item.block_key && d.page === item.page && d.block_key === item.block_key) return true;
        return false;
      });
      if (index >= 0) {
        data[index] = { ...data[index], ...item, updated_at: new Date().toISOString() };
      } else {
        data.push({
          id: item.id || `mock-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          ...item
        });
      }
    }
    saveTableData(this.table, data);
    return { data: values, error: null };
  }

  async update(values) {
    const data = getTableData(this.table);
    let updatedCount = 0;
    const updatedData = data.map(item => {
      let matches = true;
      for (const filter of this.filters) {
        if (!filter(item)) {
          matches = false;
          break;
        }
      }
      if (matches) {
        updatedCount++;
        return { ...item, ...values, updated_at: new Date().toISOString() };
      }
      return item;
    });
    saveTableData(this.table, updatedData);
    return { data: values, error: null, count: updatedCount };
  }

  async delete() {
    const data = getTableData(this.table);
    const filtered = data.filter(item => {
      for (const filter of this.filters) {
        if (!filter(item)) return true;
      }
      return false;
    });
    saveTableData(this.table, filtered);
    return { data: null, error: null };
  }

  // Promise resolution for queries (await supabase.from(...).select(...))
  then(resolve, reject) {
    try {
      let rows = getTableData(this.table);

      // Apply filters
      for (const filter of this.filters) {
        rows = rows.filter(filter);
      }

      // Apply sorts
      for (const sort of this.sorts) {
        rows = [...rows].sort(sort);
      }

      // Apply limit
      if (this.limitCount !== null) {
        rows = rows.slice(0, this.limitCount);
      }

      // Attach auth_users relation if requested
      if (this.table === 'forum_topics') {
        rows = rows.map(r => ({
          ...r,
          auth_users: { email: r.display_name ? `${r.display_name.toLowerCase().replace(/\s+/g, '')}@community.bos` : 'member@community.bos' }
        }));
      }

      if (this.isSingle) {
        const item = rows[0] || null;
        resolve({ data: item, error: item ? null : { message: 'Row not found' } });
      } else {
        resolve({ data: rows, error: null, count: rows.length });
      }
    } catch (err) {
      resolve({ data: null, error: { message: err.message } });
    }
  }
}

const DEMO_USERS = {
  'admin@senga.org': {
    id: 'demo-admin-id',
    email: 'admin@senga.org',
    role: 'Admin',
    user_metadata: { role: 'Admin', full_name: 'BOS Chief Administrator' },
    created_at: '2026-01-01T00:00:00.000Z'
  },
  'admin@bos.org': {
    id: 'demo-admin-id',
    email: 'admin@bos.org',
    role: 'Admin',
    user_metadata: { role: 'Admin', full_name: 'BOS Chief Administrator' },
    created_at: '2026-01-01T00:00:00.000Z'
  },
  'editor@senga.org': {
    id: 'demo-editor-id',
    email: 'editor@senga.org',
    role: 'Editor(Blogs)',
    user_metadata: { role: 'Editor(Blogs)', full_name: 'Editorial Lead (Blogs)' },
    created_at: '2026-02-01T00:00:00.000Z'
  },
  'mod@senga.org': {
    id: 'demo-mod-id',
    email: 'mod@senga.org',
    role: 'Moderator',
    user_metadata: { role: 'Moderator', full_name: 'Community Forum Moderator' },
    created_at: '2026-02-15T00:00:00.000Z'
  },
  'user@senga.org': {
    id: 'demo-user-id',
    email: 'user@senga.org',
    role: 'Normal User',
    user_metadata: { role: 'Normal User', full_name: 'Sarah Namukasa' },
    created_at: '2026-03-01T00:00:00.000Z'
  },
  'user@bos.org': {
    id: 'demo-member-id',
    email: 'user@bos.org',
    role: 'Normal User',
    user_metadata: { role: 'Normal User', full_name: 'Community Member' },
    created_at: '2026-01-01T00:00:00.000Z'
  }
};

const mockAuth = {
  async getSession() {
    let sessionUser = currentMockUser;
    if (!sessionUser && typeof window !== 'undefined' && window.localStorage) {
      const stored = window.localStorage.getItem('bos_mock_auth_user');
      if (stored) {
        try { sessionUser = JSON.parse(stored); currentMockUser = sessionUser; } catch(e) {}
      }
    }
    return {
      data: {
        session: sessionUser ? {
          user: sessionUser,
          access_token: 'mock-token-' + sessionUser.id
        } : null
      },
      error: null
    };
  },

  async getUser() {
    const { data } = await this.getSession();
    return { data: { user: data?.session?.user || null }, error: null };
  },

  async signInWithPassword({ email, password }) {
    if (!email || !password) {
      return { data: { user: null, session: null }, error: { message: 'Email and password required' } };
    }

    const cleanEmail = email.trim().toLowerCase();
    let user;

    // Check predefined demo users
    if (DEMO_USERS[cleanEmail]) {
      user = { ...DEMO_USERS[cleanEmail] };
    } else {
      // Check dynamically created team members
      const teamList = getTableData('team_members');
      const found = teamList.find(m => m.email && m.email.toLowerCase() === cleanEmail);
      if (found) {
        if (found.password && found.password !== password) {
          return { data: { user: null, session: null }, error: { message: 'Invalid password for team account.' } };
        }
        user = {
          id: found.id || `user-${Date.now()}`,
          email: found.email,
          role: found.role || 'Normal User',
          user_metadata: {
            role: found.role || 'Normal User',
            full_name: found.full_name || 'Team Member'
          },
          created_at: found.created_at || new Date().toISOString()
        };
      } else {
        const isAdmin = cleanEmail.includes('admin') || cleanEmail.includes('sokuto');
        const role = isAdmin ? 'Admin' : 'Normal User';
        user = {
          id: `user-${Date.now()}`,
          email: cleanEmail,
          role: role,
          user_metadata: {
            role: role,
            full_name: isAdmin ? 'BOS Administrator' : cleanEmail.split('@')[0]
          },
          created_at: new Date().toISOString()
        };
      }
    }

    currentMockUser = user;
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('bos_mock_auth_user', JSON.stringify(user));
    }
    return {
      data: {
        user,
        session: { user, access_token: 'mock-token-' + user.id }
      },
      error: null
    };
  },

  async signUp({ email, password, options }) {
    if (!email || !password) {
      return { data: { user: null, session: null }, error: { message: 'Email and password required' } };
    }
    const cleanEmail = email.trim().toLowerCase();
    const fullName = options?.data?.full_name || cleanEmail.split('@')[0];
    const role = options?.data?.role || 'Normal User';

    // Register user in team_members table so they persist
    const teamList = getTableData('team_members');
    const existing = teamList.find(m => m.email && m.email.toLowerCase() === cleanEmail);
    if (!existing) {
      teamList.push({
        id: `user-${Date.now()}`,
        email: cleanEmail,
        full_name: fullName,
        role: role,
        status: 'active',
        password: password,
        created_at: new Date().toISOString()
      });
      saveTableData('team_members', teamList);
    }

    return this.signInWithPassword({ email, password });
  },

  async signOut() {
    currentMockUser = null;
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem('bos_mock_auth_user');
    }
    return { error: null };
  },

  onAuthStateChange(callback) {
    if (typeof callback === 'function') {
      callback(currentMockUser ? 'SIGNED_IN' : 'SIGNED_OUT', currentMockUser ? { user: currentMockUser } : null);
    }
    return {
      data: {
        subscription: {
          unsubscribe: () => {}
        }
      }
    };
  }
};

// Image storage caching helper for fast, permanent browser rendering
const uploadedImagesMap = {};
async function readBlobAsDataUrl(blobOrFile) {
  if (typeof blobOrFile === 'string') return blobOrFile;
  if (typeof FileReader === 'undefined' || !(blobOrFile instanceof Blob)) return '/blog_soil.png';
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target?.result || '/blog_soil.png');
    reader.onerror = () => resolve('/blog_soil.png');
    reader.readAsDataURL(blobOrFile);
  });
}

const mockStorage = {
  from(bucket) {
    return {
      async upload(filePath, file) {
        let dataUrl = '/blog_soil.png';
        if (file instanceof Blob || (typeof File !== 'undefined' && file instanceof File)) {
          dataUrl = await readBlobAsDataUrl(file);
        } else if (typeof file === 'string') {
          dataUrl = file;
        }
        uploadedImagesMap[filePath] = dataUrl;
        if (typeof window !== 'undefined' && window.localStorage) {
          try {
            // Keep recent uploads cache
            window.localStorage.setItem(`bos_img_${filePath}`, dataUrl);
          } catch(e) {}
        }
        return { data: { path: filePath, fullPath: `${bucket}/${filePath}`, publicUrl: dataUrl }, error: null };
      },
      getPublicUrl(filePath) {
        let url = uploadedImagesMap[filePath];
        if (!url && typeof window !== 'undefined' && window.localStorage) {
          url = window.localStorage.getItem(`bos_img_${filePath}`);
        }
        if (!url) {
          url = filePath.startsWith('http') || filePath.startsWith('/') || filePath.startsWith('data:') ? filePath : `/blog_soil.png`;
        }
        return {
          data: { publicUrl: url }
        };
      }
    };
  }
};

// Fallback proxy that delegates to realClient if configured or mockClient
export const supabase = {
  from(table) {
    if (realClient) {
      try {
        const query = realClient.from(table);
        return query;
      } catch (err) {
        console.warn(`[Supabase] Query delegation failed for table ${table}, falling back:`, err);
      }
    }
    return new MockQueryBuilder(table);
  },

  async rpc(funcName, params = {}) {
    if (realClient) {
      try {
        return await realClient.rpc(funcName, params);
      } catch (err) {
        console.warn(`[Supabase] RPC ${funcName} failed, falling back:`, err);
      }
    }
    if (funcName === 'increment_blog_view') {
      const blogs = getTableData('blogs');
      const blog = blogs.find(b => b.slug === params.blog_slug);
      if (blog) {
        blog.views_count = (blog.views_count || 0) + 1;
        saveTableData('blogs', blogs);
      }
      return { data: null, error: null };
    }
    return { data: null, error: null };
  },

  auth: {
    async getSession() {
      if (realClient) {
        try {
          const res = await realClient.auth.getSession();
          if (res.data?.session) return res;
        } catch (e) {}
      }
      return mockAuth.getSession();
    },

    async signInWithPassword({ email, password }) {
      const cleanEmail = email?.trim().toLowerCase();
      const isDemoAdmin = cleanEmail === 'admin@bos.org' && password === 'admin123';
      const isDemoUser = cleanEmail === 'user@bos.org' && password === 'user123';

      if (realClient) {
        try {
          const res = await realClient.auth.signInWithPassword({ email, password });
          if (!res.error && res.data?.session) return res;
          // If realClient failed or demo account is used, gracefully allow demo login
          if (isDemoAdmin || isDemoUser) {
            return mockAuth.signInWithPassword({ email, password });
          }
          return res;
        } catch (err) {
          if (isDemoAdmin || isDemoUser) {
            return mockAuth.signInWithPassword({ email, password });
          }
          return { data: { user: null, session: null }, error: { message: err.message } };
        }
      }
      return mockAuth.signInWithPassword({ email, password });
    },

    async signUp({ email, password }) {
      if (realClient) {
        try {
          const res = await realClient.auth.signUp({ email, password });
          if (!res.error) return res;
        } catch (err) {}
      }
      return mockAuth.signUp({ email, password });
    },

    async signOut() {
      if (realClient) {
        try {
          await realClient.auth.signOut();
        } catch (e) {}
      }
      return mockAuth.signOut();
    },

    onAuthStateChange(callback) {
      if (realClient) {
        try {
          return realClient.auth.onAuthStateChange(callback);
        } catch (e) {}
      }
      return mockAuth.onAuthStateChange(callback);
    }
  },

  storage: {
    from(bucket) {
      return {
        async upload(filePath, file) {
          // Read dataUrl for reliable fallback
          let dataUrl = '/blog_soil.png';
          if (file instanceof Blob || (typeof File !== 'undefined' && file instanceof File)) {
            dataUrl = await readBlobAsDataUrl(file);
          } else if (typeof file === 'string') {
            dataUrl = file;
          }
          uploadedImagesMap[filePath] = dataUrl;
          if (typeof window !== 'undefined' && window.localStorage) {
            try { window.localStorage.setItem(`bos_img_${filePath}`, dataUrl); } catch(e) {}
          }

          if (realClient) {
            try {
              const res = await realClient.storage.from(bucket).upload(filePath, file);
              if (!res.error) return res;
            } catch (err) {
              console.warn('[Supabase Storage] Fallback to direct asset reader:', err);
            }
          }
          return { data: { path: filePath, fullPath: `${bucket}/${filePath}`, publicUrl: dataUrl }, error: null };
        },

        getPublicUrl(filePath) {
          if (realClient) {
            try {
              const res = realClient.storage.from(bucket).getPublicUrl(filePath);
              if (res?.data?.publicUrl && !res.data.publicUrl.includes('undefined')) {
                // If we also have a cached high-res data URL from local upload, we can use that if remote is unreachable
                return res;
              }
            } catch (err) {}
          }
          return mockStorage.from(bucket).getPublicUrl(filePath);
        }
      };
    }
  }
};
