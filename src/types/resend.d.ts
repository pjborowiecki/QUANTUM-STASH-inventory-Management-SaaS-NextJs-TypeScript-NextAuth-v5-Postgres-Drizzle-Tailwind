type RequireAtLeastOne<T> = {
  [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>
}[keyof T]

interface PostOptions {
  query?: {
    [key: string]
  }
}

interface CreateEmailBaseOptions extends EmailRenderOptions {
  attachments?: Attachment[]
  bcc?: string | string[]
  cc?: string | string[]
  from: string
  headers?: Record<string, string>
  reply_to?: string | string[]
  subject: string
  tags?: Tag[]
  to: string | string[]
}

interface EmailRenderOptions {
  react?: React.ReactElement | React.ReactNode | null
  html?: string
  text?: string
}

export type CreateEmailOptions = RequireAtLeastOne<EmailRenderOptions> &
  CreateEmailBaseOptions

export interface CreateEmailRequestOptions extends PostOptions {}
