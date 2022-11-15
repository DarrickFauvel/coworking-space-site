import Item from './Item'
import { workspaces } from '../data'

const Items = () => {
  return workspaces.map((workspace) => (
    <Item workspace={workspace} key={workspace.id} />
  ))
}

export default Items
