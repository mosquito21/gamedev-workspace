// Spanish interface text, keyed by the original English. Each area keeps its
// own file so translations can be reviewed next to the code they belong to.
import common from './es/common'
import desktop from './es/desktop'
import chats from './es/chats'
import mobile from './es/mobile'
import workspace from './es/workspace'

const es: Record<string, string> = { ...common, ...workspace, ...desktop, ...chats, ...mobile }
export default es
