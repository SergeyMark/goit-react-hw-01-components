import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendItem = ({friends}) => {
    return (
        friends.map(({name, avatar, isOnline, id }) => 
            <li className={css.item} key={id}>
                {isOnline ? (<span className={css.statusGreen}></span>)
                          : (<span className={css.statusRed}></span>)}    
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li>
        )
    )
}

FriendItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.string,
};




