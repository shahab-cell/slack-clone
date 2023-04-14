import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import styled from 'styled-components'
import CreateIcon from '@mui/icons-material/Create'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import InboxIcon from '@mui/icons-material/Inbox'
import AppsIcon from '@mui/icons-material/Apps'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import DraftsIcon from '@mui/icons-material/Drafts'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import SidebarOption from './SidebarOption'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import AddIcon from '@mui/icons-material/Add'
import { useCollection } from 'react-firebase-hooks/firestore'
import { auth, db } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function Sidebar() {
  const [channels, loading, error] = useCollection(db.collection('rooms'))
  const [user] = useAuthState(auth)
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Channel HQ</h2>
          <h3>
            <FiberManualRecordIcon />
            {user.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SidebarOption Icon={InsertCommentIcon} title='Threads' />
      <SidebarOption Icon={InboxIcon} title='Mentions and reactions' />
      <SidebarOption Icon={DraftsIcon} title='Saved items' />
      <SidebarOption Icon={BookmarkBorderIcon} title='Channel browser' />
      <SidebarOption Icon={PeopleAltIcon} title='People and user groups' />
      <SidebarOption Icon={AppsIcon} title='Apps' />
      <SidebarOption Icon={FileCopyIcon} title='File browser' />
      <SidebarOption Icon={ExpandLessIcon} title='Show less' />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title='Channels' />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title='Add channel' />
      {channels?.docs.map((doc) => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
  flex: 0.3;
  color: white;
  background: var(--slack-color);
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`
const SidebarHeader = styled.div`
  display: flex;
  padding: 13px;
  border-bottom: 1px solid #49274b;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`
const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1;
    margin-right: 2px;
    color: green;
  }
`
