import user from '../user.json';
import data from '../components/Statistics/data.json';
import friends from '../components/FriendList/friends.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';


export const App = () => {
  return (
    <>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics 
        title="Upload stats" 
        stats={data}
      />
      <FriendList
        friends={friends}
      />
    </>
  );
};
