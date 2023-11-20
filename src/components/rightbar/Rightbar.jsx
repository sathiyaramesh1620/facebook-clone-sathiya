import "./rightbar.css";


export default function Rightbar(){
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
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
        </div>
        </div>
    );
}