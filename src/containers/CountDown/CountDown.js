import React, { Component } from 'react';
import Button from "../../components/Button/Button";
import "./CountDown.css";

class CountDown extends Component {

	state = {
  		timerOn: false,
  		timerStart: 0,
  		timerTime: 0
	}

		startTimer = () => {
  			this.setState({
    			timerOn: true,
    			timerStart: this.state.timerTime
  			});

	  		this.timer = setInterval(() => {
	    		const newTime = this.state.timerTime - 10;
	    			if (newTime >= 0) {
	      				this.setState({
	        				timerTime: newTime
	      				});
	    			} else {
	      				clearInterval(this.timer);
	      				this.setState({ timerOn: false });
	      				alert("Countdown ended");
			    }
			}, 10);
		};

		stopTimer = () => {
  			clearInterval(this.timer);
  			this.setState({ timerOn: false });
		};

		resetTimer = () => {
  			if (this.state.timerOn === false) {
    			this.setState({
     				timerTime: this.state.timerStart
   			 	});
  			}
		};

		adjustTimer = input => {
  			const { timerTime, timerOn } = this.state;
  			const max = 216000000;
  			if (!timerOn) {
  			  if (input === "incHours" && timerTime + 3600000 < max) {
  			    this.setState({ timerTime: timerTime + 3600000 });
  			  } else if (input === "decHours" && timerTime - 3600000 >= 0) {
  			    this.setState({ timerTime: timerTime - 3600000 });
  			  } else if (input === "incMinutes" && timerTime + 60000 < max) {
  			    this.setState({ timerTime: timerTime + 60000 });
  			  } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
  			    this.setState({ timerTime: timerTime - 60000 });
  			  } else if (input === "incSeconds" && timerTime + 1000 < max) {
  			    this.setState({ timerTime: timerTime + 1000 });
  			  } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
  			    this.setState({ timerTime: timerTime - 1000 });
  			  }
  			}
		};

		render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

    let countdown = null;
    if(this.props.isShown){
    countdown = 
      <div className="Countdown">
        <div className="Countdown-header">Countdown</div>
        <div className="Countdown-display">
          <Button clicked={() => this.adjustTimer("incHours")}>&#8679;</Button>
          <Button clicked={() => this.adjustTimer("incMinutes")}>
            &#8679;
          </Button>
          <Button clicked={() => this.adjustTimer("incSeconds")}>
            &#8679;
          </Button>

          <div className="Countdown-time">
            {hours} : {minutes} : {seconds}
          </div>

          <Button clicked={() => this.adjustTimer("decHours")}>&#8681;</Button>
          <Button clicked={() => this.adjustTimer("decMinutes")}>
            &#8681;
          </Button>
          <Button clicked={() => this.adjustTimer("decSeconds")}>
            &#8681;
          </Button>
        <div className="Countdown-label">
          <span className="Countdown-label_hours">Hours</span>
          <span className="Countdown-label_minutes">Minutes</span>
          <span className="Countdown-label_seconds">Seconds</span>
        </div>
        </div>

        {timerOn === false && (
          <Button className="Button-start" clicked={this.startTimer}>
            Start
          </Button>
        )}
        {timerOn === true && timerTime >= 1000 && (
          <Button className="Button-stop" clicked={this.stopTimer}>
            Stop
          </Button>
        )}

            <Button className="Button-reset" clicked={this.resetTimer}>
              Reset
            </Button>

      </div>      
    }

    return (
      <div>
        {countdown}
      </div>
    );
  }

}

export default CountDown;