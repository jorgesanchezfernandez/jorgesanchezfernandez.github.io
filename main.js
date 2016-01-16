//////////////////////////////////////////////////
//////  ReactJS portfolio by Jorge Sánchez ///////
//////  ********************************** ///////
//////  HTML5 - CSS3 - JQuery - Canvas     ///////
//////////////////////////////////////////////////



///// About Me section
var Me = React.createClass({
	
	render: function(){	
		
		return (
			<section>
				<div className="row">
		    		<div className="col-sm-8">
		   		   <h2>About me</h2>
		  		   	<h4>I am a software engineer with over three years of experience in front-end development, two years of experience in video games development and research, and four years of experience in desktop applications. 
						  My domain of professional activity ranges from customers in private companies and public health institutions.</h4> 
		  		   	<p>Among my qualities it is worth highlighting  my communication skills, so important in a team, to get and collect ideas and provide the project better quality content.
						  Leadership skills, flexibility, professionalism, facility to solving problems and passion.</p>
		 		   </div>
		  		  <div className="col-sm-4 text-center">
		    		  	<figure>
						   	<img src="images/me.png" alt="" id="paintBorderMe"/> 
						</figure>
		    		</div>
		   	</div>
			</section>
		);		
	}		
});


///// About Work section
var Work = React.createClass({

	//////Initialize states
	  getInitialState: function () {
	  	
			return { 
						visiblePilgrim: "on", visibleDemo1:"on",
						visibleVideo: "off" , visibleDemo2:"off"
					 };         
					 							
	},
	
	//Change pilgrim visibility status
	changeStatePilgrim: function () {
		if (this.state.visiblePilgrim === "on"){
			this.setState({ visiblePilgrim: "off", visibleVideo: "on" })	
		}else {
			this.setState({ visiblePilgrim: "on", visibleVideo: "off" })
			var video = document.getElementById("videoCodex");
			video.pause();
		}
	},
	
	//Change demo visibility status
	changeStateDemo: function () {
		if (this.state.visibleDemo1 === "on"){
			this.setState({ visibleDemo1: "off", visibleDemo2: "on" })	
		}else {
			this.setState({ visibleDemo1: "on", visibleDemo2: "off" })
		}
	},

	render: function(){	
		
		return (
				<section id="visualisation">
					  <h2>Portfolio</h2>
					  <h4>Real-time visualisation projects</h4>
					  <div className="row text-center">
					    <div className="col-sm-4">
					      <div className="thumbnail click" data-show={this.state.visiblePilgrim} onClick={this.changeStatePilgrim}>
					        <img src="images/codex.png" alt="Codex" width="400" height="300" />
					        <p><strong>The pilgrim&lsquo;s Codex</strong></p>
					        <p>Cultural videogame</p>
					      </div>
					      <div id="stCodex" className="thumbnail" data-show={this.state.visibleVideo}>
								 <video id="videoCodex" width="375" height="280" controls>
									  <source src="videos/codex.mp4" type="video/mp4" />
									  Your browser does not support the video tag.
								 </video> 
								 <p><strong>The pilgrim&lsquo;s Codex</strong></p>
				       		 <p>Cultural videogame</p>
								 <div className="crossButton" onClick={this.changeStatePilgrim}>Exit video</div>
							</div> 
					    </div>
					    <div className="col-sm-4">
					      <div className="thumbnail">
					        <img src="images/cube.png" alt="Cube" width="400" height="300"/>
					        <p><strong>Cube project</strong></p>
					        <p>Educative videogame</p>
					      </div>
					    </div>
					    <div className="col-sm-4">
					      <div className="thumbnail click" data-show={this.state.visibleDemo1} onClick={this.changeStateDemo}>
					        <img src="images/demo.jpg" alt="Demoscene" width="400" height="300"/>
					        <p><strong>Demoscene</strong></p>
					        <p>Real-time rendering process</p>
					      </div>
					      <div id="stDemo" className="thumbnail click" data-show={this.state.visibleDemo2} onClick={this.changeStateDemo}>
									<img src="images/demoImages.png" alt="Demoscene image" width="400" height="300"/>
									<p><strong>Demoscene</strong></p>
					        		<p>Real-time rendering process</p>
							</div>
					    </div>
					</div>
				</section>

		);
			
	}		
});

//////Canvas component
var Canvas = React.createClass({
	
	init: function () {
		
		var canvas = document.getElementById('myCanvas');

		  if (canvas.getContext)
		  {
		    var ctx = canvas.getContext('2d');

			ctx.clearRect(0, 0, canvas.width, canvas.height);

		    for(var i=0;i<3;i++){
		      for(var j=0;j<3;j++){
		        ctx.beginPath();
		        var x = Math.floor((Math.random() * 80)*(i+1) + 45); // x coordinate
		        var y = Math.floor((Math.random() * 80)*(j+1) + 40); // y coordinate
		        var radius = Math.floor((Math.random() * 30) + 25);  // Arc radius
		        var radius1 = Math.floor((Math.random() * 18) + 15); 
		        var radius2 = Math.floor((Math.random() * 10) + 7); 
		        var startAngle = 0; // Starting point on circle
		        var endAngle = 2 * Math.PI; // End point on circle
		        var anticlockwise = i%2==0 ? false : true; // clockwise or anticlockwise
		
		
		        
				  ctx.fillStyle="#0000FF";
		        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
				  ctx.fill();
				  ctx.beginPath();
				  ctx.fillStyle="#FFFFFF";
				  ctx.arc(x, y, radius1 , startAngle, endAngle, anticlockwise);
				  ctx.fill();
				  ctx.beginPath();
				  ctx.fillStyle="#0000FF";
				  ctx.arc(x, y, radius2, startAngle, endAngle, anticlockwise);
				  ctx.fill();
		
		
		      }
		    }
		  }
	},
	
	componentDidMount: function () {
		//Start to paint
		this.init();	
	},
	
	render: function(){		
			
			return (
			<section>
				<div className="row">
				    <div className="col-sm-4 text-center">
				      <span className="glyphicon glyphicon-picture logo slideanim"></span>
				    </div>
				    <div className="col-sm-8 text-center">
				      <h2>Canvas Demo</h2><br></br>
				      <h4 ><canvas width="240" height="240" id="myCanvas" className="paintBorder">Your browser does not support canvas</canvas></h4><br></br>
				      <p><button className="clear" onClick={this.init}>Click me!</button><br></br>
				      When you click the button automaticaly redraw the canvas and show another random picture.</p>
				    </div>
		  		</div>
			</section>		
			);					
		}	

});

///// About Contact section
var Contact = React.createClass({
	
	//////Initialize states
	  getInitialState: function () {
	  	
			return {  data: [] };         
					 							
	},
		
	componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

	render: function(){
		
		return (
			<section>
				<div className="row">
					<div className="text-center slideanim">
						<h2 id="h2Contact">My contact</h2><br></br>
						<div className="col-sm-2">
						</div>
						<ValueList data={this.state.data}/><br></br>
					</div>
		  		</div>
			</section>
		);		
	}		
});

var ValueList = React.createClass({
  render: function() {
    var dataNodes = this.props.data.map(function(values) {
	      return (		    	

						<div className="col-sm-4 text-center paintBorder">
							<h4 className="h4Contact">{values.id}</h4>
						   <figure><img src={values.image} alt=""/>
								<figcaption><h4 className="h4Contact">{values.contact}</h4>
								</figcaption>		   
						   </figure>
						</div>

	      );
	 });
    return (
		<article id="contactMe">
  				{dataNodes}
  		</article>
    );
  }
});


/////Render functions

ReactDOM.render(<Me/>,document.getElementById("me"));
ReactDOM.render(<Work/>,document.getElementById("work"));
ReactDOM.render(<Canvas/>,document.getElementById("canvas"));
ReactDOM.render(<Contact url="data.json"/>,document.getElementById("contact"));

