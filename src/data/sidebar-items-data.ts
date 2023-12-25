import { ISideBarElProps } from '@/interfaces/sidebar-el.interface'
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred'
import { AiOutlineGold, AiOutlineUser } from 'react-icons/ai'
import { BiBox } from 'react-icons/bi'
import { FaRegHeart } from 'react-icons/fa'
import { GrTask } from 'react-icons/gr'
import {
  IoIosGitNetwork,
  IoIosHelpCircleOutline,
  IoIosSearch,
} from 'react-icons/io'
import { LiaUserFriendsSolid } from 'react-icons/lia'
import {
  MdOutlineAccountBalanceWallet,
  MdOutlineScoreboard,
  MdOutlineSecurity,
} from 'react-icons/md'
import { TbMessageCircle2 } from 'react-icons/tb'

export const sidebarItemsData: ISideBarElProps[] = [
  { text: 'Profile', link: '!#', Icon: AiOutlineUser },
  { text: 'Search', link: '!#', Icon: IoIosSearch },
  { text: 'Friends', link: '!#', Icon: LiaUserFriendsSolid },
  { text: 'Messages', link: '!#', Icon: TbMessageCircle2 },
  { text: 'Developments', link: '!#', Icon: IoIosGitNetwork },
  { text: 'Matches', link: '!#', Icon: AiOutlineGold },
  { text: 'Score', link: '!#', Icon: MdOutlineScoreboard },
  { text: 'Tasks', link: '!#', Icon: GrTask },
  { text: 'Favorite', link: '!#', Icon: FaRegHeart },
  { text: 'Tournaments', link: '!#', Icon: EmojiEventsOutlinedIcon },
  { text: 'Balance', link: '!#', Icon: MdOutlineAccountBalanceWallet },
  { text: 'Suggestion', link: '!#', Icon: BiBox },
]

export const sidebarItemsDataSupport: ISideBarElProps[] = [
  { text: 'Help', Icon: IoIosHelpCircleOutline, link: '!#' },
  { text: 'Conditions', Icon: ReportGmailerrorredIcon, link: '!#' },
  { text: 'Confidentiality', Icon: MdOutlineSecurity, link: '!#' },
]
