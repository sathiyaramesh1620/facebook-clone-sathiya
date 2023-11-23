import "./rightbar.css";


export default function Rightbar({profile}){
    const HomeRightbar = () =>{
        return(
            <>
            <div className="birthdayContainer">
                    <img  className="birthdayImg" src="assets/gift.png" alt=""/>
                    <span className="birthdayText"> 
                    <b>Henry </b>and  <b>3 other friends</b> have a birthday today!!
                    </span>
                </div>
           
        <img className="rightbarAd" src="assets/ad.png" alt=""/>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
<li className="rightbarFriend">
    <div className="rightbatProfileImgContainer">
        <img className="rightbarProfileImg" src="assets/person/1.jpeg" alt=""/>
<span className="rightbarOnline"></span>
    </div>
    <span className="rightbarUsername">Cathrein</span>
</li>


<li className="rightbarFriend">
    <div className="rightbatProfileImgContainer">
        <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt=""/>
<span className="rightbarOnline"></span>
    </div>
    <span className="rightbarUsername">Mathew Mariya</span>
</li>
<li className="rightbarFriend">
    <div className="rightbatProfileImgContainer">
        <img className="rightbarProfileImg" src="assets/person/4.jpeg" alt=""/>
<span className="rightbarOnline"></span>
    </div>
    <span className="rightbarUsername"> Iyrine Robert</span>
</li>
<li className="rightbarFriend">
    <div className="rightbatProfileImgContainer">
        <img className="rightbarProfileImg" src="assets/person/5.jpeg" alt=""/>
<span className="rightbarOnline"></span>
    </div>
    <span className="rightbarUsername">Jessica Robert</span>
</li>


        </ul>
            </>
        )
    }
    const ProfileRightbar = () => {
        return(
            <>
            <h4 className="rightbarTitle">User information title</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">NewYork</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Madrid</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Jenilia</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Harry</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/8.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Rashmi</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Shehnaz</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Kiara</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Anjolina</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Ananya</span>
                </div>
            </div>
            </>
        )
    }
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <ProfileRightbar />
        </div>
        </div>
    );
}