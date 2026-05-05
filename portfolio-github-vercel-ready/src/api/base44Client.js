const emptyEntity = {
  filter: async () => [],
  list: async () => [],
  get: async () => null,
  create: async (data) => data ?? {},
  update: async (_id, data) => data ?? {},
  delete: async () => ({}),
};

export const db = {
  auth: {
    isAuthenticated: async () => true,
    me: async () => ({ id: 'local-user', full_name: 'Local Preview User', email: 'local@example.com' }),
    logout: () => {},
    redirectToLogin: () => {},
  },
  entities: new Proxy({}, { get: () => emptyEntity }),
  integrations: {
    Core: {
      UploadFile: async () => ({ file_url: '' }),
      SendEmail: async () => ({}),
      InvokeLLM: async () => ({}),
      GenerateImage: async () => ({ url: '' }),
    },
  },
};

export const base44 = db;
export default db;
