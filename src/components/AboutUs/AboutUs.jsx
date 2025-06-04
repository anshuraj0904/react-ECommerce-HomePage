import React from "react";
import AboutSkeleton from "../skeleton/AboutSkeleton";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: null,
    };
    // console.log('ctr');
    
  }

  // Here, we'll make an API call to my github account, using componentDidMount()

  async componentDidMount() {
    const res = await fetch(`https://api.github.com/users/anshuraj0904`);
    const resData = await res.json();
    // console.log(resData);
    this.setState({
      userDetails: resData,
    });
    // console.log('Did Mount');
    
  }

  componentDidUpdate(){
    console.log('Did Update');
    // Note:- componentDidUpdate() is called whenever the state of the component is changed(basically whenever the data is changed/updated).
    // Used for comparing the previous state and the current state.
  }

  componentWillUnmount()
  {
    // Note:- Will be called when the component is removed from the DOM. That is, when we go to some other page.
     console.log('Will Unmount');
     
  }
  render() {

    // console.log('render');
    
    if (this.state.userDetails === null) {
      return <AboutSkeleton />;
    }

    const { name, avatar_url, following } = this.state?.userDetails;

    return (
      <div
        className={
          "max-w-md mx-auto m-10 shadow-lg rounded-2xl p-8 border text-center border-gray-200 bg-white"
        }
      >
        <h1 className={`text-2xl font-bold text-center  mb-6 'text-gray-800' `}>
          About
        </h1>

        <div className={`space-y-3 text-lg text-gray-700`}>
          <img
            className="w-40 h-40 rounded-full mx-auto"
            src={avatar_url}
            alt=""
          />
          <h3>
            <span className="font-semibold">Name:</span> {name}
          </h3>
          <h3>
            <span className="font-semibold">Address:</span> {this.props.address}
          </h3>
          <h3>
            <span className="font-semibold">Following:</span> {following}
          </h3>
        </div>
      </div>
    );
  }
}

export default AboutUs;



// All good. Let us now take a look at the way in which everything will be loaded in the order.

{/*
--> Mounting Phase starts here:-  
1. constructor is loaded and we get the props, also, userDetails is set to null.
2. We go to render part, and, as userDetails is null, so, the Skeleton will be shown.

--> Updation phase starts here:-
3. componentDidMount will be called, API will be fetched, and then userDetails will be filled in with the data.
4. We'll again go to the render and then, the data will be displayed.

// Note:- We'll go to the render again because in the componentDidMount, the state of a variable is changing, and, in react whenever that happens, that page is re-rendered, so, we go to the render part again. 
*/}

// So, if we've a log statement everywhere, then, the order will be:-
// 1. Constructor log(first time while mounting with empty data in the state) 
//2. Render log(First time, while mount)
// 3. Did Mount for data fetching(we now move to updation phase)
// 4. render(again, but with data this time), it is called everytime there's a change in the state of some data(classic react).
// 5. Did Update log(it is a lifecycle hook and is called whenever the state of the component is changed)