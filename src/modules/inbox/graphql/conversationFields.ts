export default `
  _id
  content
  status
  assignedUserId
  createdAt
  updatedAt
  assignedUser {
    _id
    username
    details {
      avatar
      fullName
      position
    }
  }
  integration {
    _id
    kind
    platform
    brandId,
    brand {
      _id
      name
    }
    channels {
      _id
      name
    }
  }
  customerId
  customer {
    _id
    visitorContactInfo
    messengerData
    avatar
    firstName
    lastName
  }
  messageCount
  participatorCount
  participatedUserIds
  participatedUsers {
    _id
    username
    details {
      avatar
      fullName
      position
    }
  }
  tagIds
  tags {
    _id
    name
    colorCode
  }
  readUserIds
  facebookPost {
    postId
    recipientId
    senderId
    content
    erxesApiId
    attachments
    timestamp
    commentCount
  }
`;
