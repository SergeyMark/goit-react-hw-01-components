import css from './FriendList.module.css';

export const FriendItem = ({friends}) => {
    return (
        friends.map(({name, avatar, isOnline, id }) => 
            <li className={css.item} key={id}>
                {isOnline ? (<span className={css.statusGreen}></span>)
                          :(<span className={css.statusRed}></span>)}    
                {/* <span className={css.status}></span> */}
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p class="name">{name}</p>
            </li>
        )
    )
}




