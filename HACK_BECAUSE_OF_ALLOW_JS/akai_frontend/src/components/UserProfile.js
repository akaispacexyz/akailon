export default function UserProfile() {
    return (<div>
      {/* UserPanel div with image and text */}
      <div className="user-panel">
        <img src="/UserPanel.png" alt="User Panel" className="user-panel-image"/>
        <div className="user-panel-text flex flex-row justify-between px-5 w-full">
          <div className="flex items-center space-x-4">
            <img src="/l1profile.png" alt="Profile" className=" mt-6 scale-125"/>
            <div className="relative inline-block">
              {/* Image */}
              <img src="usernamePlate.png" alt="Username Plate" className="scale-110 -mt-6"/>

              {/* Centered text over the image */}
              <p className="absolute -top-3 -left-8 w-full h-full flex items-center justify-center text-white  font-mono">
                UX75ZZZ
              </p>
              <p className=" absolute text-2xl text-yellow-400 glow-effect hover:glow-off">
                Platinum
              </p>
            </div>
          </div>
          <div className="relative  items-center justify-center flex scale-150 mr-12 pr-2">
            {/* Image */}
            <img src="rec1.png" alt="Username Plate" className="scale-125  "/>

            {/* Centered text over the image */}
            <div className="absolute w-full h-full flex items-center  text-white  font-sans justify-around">
              <img src="spoofCoin.png" alt="" className=" scale-150"/>
              <p>423</p>
            </div>
          </div>
          <div className="relative  items-center justify-center flex scale-150 mr-3">
            {/* Image */}
            <img src="rec2.png" alt="Username Plate" className="scale-125  "/>

            {/* Centered text over the image */}
            <div className="absolute w-full h-full flex items-center  text-white  font-sans justify-around">
              <img src="mainCoin.png" alt="" className=" scale-125"/>
              <p>423</p>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
