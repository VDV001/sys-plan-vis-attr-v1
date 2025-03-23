# Дерево проекта

sys-plan-vis-attr-v1/
├── backend/
│   ├── src/
│   │   ├── app.controller.ts
│   │   ├── app.module.ts
│   │   ├── app.service.ts
│   │   ├── attractions/
│   │   │   ├── attractions.controller.ts
│   │   │   ├── attractions.entity.ts
│   │   │   ├── attractions.module.ts
│   │   │   └── attractions.service.ts
│   │   ├── auth/
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.module.ts
│   │   │   ├── auth.service.ts
│   │   │   └── login.dto.ts
│   │   ├── main.ts
│   │   ├── swagger.config.ts
│   │   └── users/
│   │       ├── user.entity.ts
│   │       ├── users.module.ts
│   │       └── users.service.ts
│   └── tsconfig.json
├── frontend/
│   ├── app/
│   │   ├── (auth)/
│   │   │   └── login/
│   │   ├── admin/
│   │   │   ├── attractions/
│   │   │   └── layout.tsx
│   │   ├── api/
│   │   ├── components/
│   │   │   ├── AttractionTable/
│   │   │   ├── AuthForm/
│   │   │   └── MapLinkGenerator/
│   │   ├── lib/
│   │   │   ├── api/
│   │   │   └── auth/
│   │   └── page.tsx
│   ├── next.config.js
│   ├── package.json
│   └── tsconfig.json
├── README.md
└── .gitignore
