import type { BACKEND_SKILLS, FRONTEND_SKILLS, TOOLS } from './data'

export type TFrontendSkills = (typeof FRONTEND_SKILLS)[number]
export type TBackendSkills = (typeof BACKEND_SKILLS)[number]
export type TToolsSkills = (typeof TOOLS)[number]
