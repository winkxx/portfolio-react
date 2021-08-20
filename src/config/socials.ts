import { Rss, Github, Props, Telegram, Twitter, Sinaweibo, Steam, Medium } from '@icons-pack/react-simple-icons'
import { FC } from 'react'

export interface SocialProps {
  name: string
  link: string
  icon: FC<Props> | null
  apiUrl: string
  color: string
}

export const socials: SocialProps[] = [
  {
    name: 'GitHub',
    link: 'https://github.com/spencerwooo',
    icon: Github,
    apiUrl: 'https://api.spencerwoo.com/substats/?source=github&queryKey=winkxx',
    color: '#24292F',
  },
  {
    name: 'Telegram',
    link: 'https://t.me/realSpencerWoo',
    icon: Telegram,
    apiUrl: 'https://api.spencerwoo.com/substats/?source=telegram&queryKey=winxry',
    color: '#2CA5E0',
  }
]
