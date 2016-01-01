//////////////////////////////////////////////////
//////  ReactJS portfolio by Jorge Sánchez ///////
//////  ********************************** ///////
//////  HTML5 - CSS3 - JQuery - Canvas     ///////
//////////////////////////////////////////////////

//////Canvas component
var Canvas = React.createClass({
	
	//////Initialize states
	  getInitialState: function () {
	  	
			return { 
						 sectCanvasAct: false,
						 sectFadeIn: false					
					 };         
					 							
	},
	
	//////Activate or inactive section Me state
	activateHandle: function(bool){
		this.setState({ sectCanvasAct: bool, sectFadeIn:bool })      //If it's called, get the transfered state
		
	},
	
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
			<section data-fadein={this.state.sectFadeIn}>
				<p className="divInfo">Canvas Demo</p>
				<section data-active={this.state.sectCanvasAct} data-fadeIn={this.state.sectFadeIn}>
					<article>
						<canvas width="240" height="240" id="myCanvas">Your browser does not support canvas</canvas>
					</article>
					<button className="clear" onClick={this.init}>Click me!</button>
				</section>
			</section>		
			);					
		}	

});

//////Navigation component
var Nav = React.createClass({
			
	  //////Initialize states
	  getInitialState: function () {
			return {  
			          menuAct: false ,          //Menu activate or inactivate
						 btnMeAct: false,          //Button activate or inactivate
						 btnWorkAct: false,        //Button activate or inactivate
						 btnCanvasDemo:false,		//Button activate or inactivate	
						 btnContactAct: false,		//Button activate or inactivate		 
						 btnCVAct:false
					 };
											
		},
				  
		//////If Menu was clicked
		goHome: function () {
			
			this.setState({ menuAct: !this.state.menuAct,   //If clicked get opposite state
								 btnMeAct: false,        			//Inactive button
								 btnWorkAct: false,      			//Inactive button
								 btnCanvasDemo:false,				//Inactive button
								 btnContactAct: false,   			//Inactive button
								 btnCVAct:false
							  })		
							  
			meRender.activateHandle(false);			//Inactive id="Me"
			workRender.activateHandle(false);      //Inactive id="Work"
			contactRender.activateHandle(false);
			initCanvas.activateHandle(false);
			workRender.inactiveAll();
			initCanvas.init();

		},

		//////If About me was clicked
		goMe: function () {
			
			if (!this.state.btnMeAct)                 //Do if it's not already actived
			{
				this.setState({ btnMeAct: true,        //Active button
									 btnWorkAct: false,     //Inactive button
									 btnCanvasDemo:false,	//Inactive button
									 btnContactAct: false,	//inactive button
									 btnCVAct:false
								  })
								  
				meRender.activateHandle(true);			  //Active id="Me"
				workRender.activateHandle(false);      //Inactive id="Work"
				contactRender.activateHandle(false);
				initCanvas.activateHandle(false);
				workRender.inactiveAll();
				window.location.hash = '#me';

			} 
		},
		//////If My Work was clicked
		goWork: function () {
			if (!this.state.btnWorkAct)					//Do if it's not already actived
			{	
				this.setState({ btnWorkAct: true,      //Active button
				    				 btnMeAct: false,       //Inactive button
				    				 btnCanvasDemo:false,	//Inactive button
									 btnContactAct: false,	//inactive button
									 btnCVAct:false
				              })
				              
				meRender.activateHandle(false);        //Inactive id="Me"
				workRender.activateHandle(true);       //Active id="Work"
				contactRender.activateHandle(false);
				initCanvas.activateHandle(false);
				workRender.inactiveAll();
				window.location.hash = '#work';
			}
		},
		
		//////If My canvas demo was clicked
		goCanvas: function () {
			if (!this.state.btnCanvasAct)					//Do if it's not already actived
			{	
				this.setState({ btnCanvasDemo:true,		//Active button
									 btnWorkAct: false,     //Inactive button
				    				 btnMeAct: false,       //Inactive button
									 btnContactAct: false,	//inactive button
									 btnCVAct:false
				              })
				              
				meRender.activateHandle(false);        //Inactive id="Me"
				workRender.activateHandle(false);       //Active id="Work"
				contactRender.activateHandle(false);
				initCanvas.activateHandle(true);
				workRender.inactiveAll();
				window.location.hash = '#canvas';
			}
		},
		
		goCV: function () {
			if (!this.state.btnCVAct)					//Do if it's not already actived
			{	
				this.setState({ btnCanvasDemo:false,		//Inactive button
									 btnWorkAct: false,     //Inactive button
				    				 btnMeAct: false,       //Inactive button
									 btnContactAct: false,	//inactive button
									 btnCVAct:true
				              })

			}
		},
		
		//////If Contact Me was clicked
		goContact: function () {
			
			if (!this.state.btnContactAct)             //Do if it's not already actived
			{
				this.setState({ btnContactAct: true,    //Active button
									 btnMeAct: false,        //Inactive button
									 btnCanvasDemo:false,	 //Inactive button
									 btnWorkAct: false,       //Inactive button
									 btnCVAct:false
								  })
								  
				meRender.activateHandle(false);        //Inactive id="Me"
				workRender.activateHandle(false);      //Inactive id="Work"
				contactRender.activateHandle(true);
				initCanvas.activateHandle(false);
				workRender.inactiveAll();
				window.location.hash = '#contact';
			}
				 
		},

		render: function(){
			//Building data-names
			var menuActName = "menuAct" + this.state.menuAct;
			
			return (
					<ul>
						<li onClick={this.goHome}><img src="images/menu.png" /></li>
    					<li data-menu={menuActName} data-active={this.state.btnMeAct} onClick={this.goMe}>About Me</li>	
						<li data-menu={menuActName} data-active={this.state.btnWorkAct} onClick={this.goWork}>Visualisation</li>
						<a id="aMenu"href="JorgeSanchezCV.pdf" download><li data-menu={menuActName} data-active={this.state.btnCVAct} onClick={this.goCV}>Download CV</li></a>
						<li data-menu={menuActName} data-active={this.state.btnCanvasDemo} onClick={this.goCanvas}>Canvas Demo</li>
						<li data-menu={menuActName} data-active={this.state.btnContactAct} onClick={this.goContact}>Contact Me</li>

					</ul>
			);		
		}		
});

///// About Me section
var Me = React.createClass({
	
	//////Initialize states
	  getInitialState: function () {
	  	
			return {  sectMeAct: false, 	//Section id="Me" activate or inactivate
						 sectFadeIn: false					
					 };         
					 							
	},
	
	//////Activate or inactive section Me state
	activateHandle: function(bool){
		this.setState({ sectMeAct: bool,sectFadeIn:bool })      //If it's called, get the transfered state
		
	},

	render: function(){	
		
		return (
			<section data-fadein={this.state.sectFadeIn}>
				<p className="divInfo">About me</p>
				<section data-active={this.state.sectMeAct}>
					<article id="aboutMe">
						<div id="photo">
						   <figure>
						   	<img src="images/me.png" alt=""/> 
						   </figure>
						</div>
						<div id="meDescription">
						  <p>
						  Among my qualities it is worth highlighting  my communication skills, so important in a team, to get and collect ideas and provide the project better quality content.
						  Leadership skills, flexibility, professionalism, facility to solving problems and passion.
						  </p>
						</div>
					</article>
				</section>	
			</section>
		);		
	}		
});

///// About Work section
var Work = React.createClass({
	
	//////Initialize states
	  getInitialState: function () {
	  	
			return {  sectWorkAct: false, //Section id="Work" activate or inactivate
						 itemPilgrim: "item-out",
						 itemCube: "item-out",
						 itemDemo: "item-out",
						 sectContentAct: false,
						 sectFadeIn: false
					};         
					 							
	},
	
	//////Activate or inactive section Work state
	activateHandle: function(bool){

		this.setState({ sectWorkAct: bool, sectFadeIn: bool })     //If it's called, get the transfered state		
	},
	
	//////Activate items
	activePilgrim: function(){
		
		this.activateHandle(false);
		this.setState({
							itemPilgrim: "item-in", 
							sectContentAct: true
						  })
	},
	
	activeCube: function(){
		
		this.activateHandle(false);
		this.setState({ 		
		 					itemCube: "item-in" , 
		 					sectContentAct: true 
		 				  })
	},
	
	activeDemo: function(){
		
		this.activateHandle(false);
		this.setState({							 
							itemDemo: "item-in", 
							sectContentAct: true
						  })
	},
	
	//////Inactive items
	inactivePilgrim: function(){
		
		this.activateHandle(true);
		this.setState({
							itemPilgrim: "item-out", 
							sectContentAct: false
						  })
		var video = document.getElementById("videoCodex");
		video.pause();
		
	},
	
	inactiveCube: function(){
		
		this.activateHandle(true);
		this.setState({
							itemCube: "item-out", 
							sectContentAct: false
						  })
	},
	
	inactiveDemo: function(){
		
		this.activateHandle(true);
		this.setState({ 
							itemDemo: "item-out", 
							sectContentAct: false
						  })
	},
	
	inactiveAll: function(){
		this.setState({
							itemPilgrim: "item-out", 
							itemCube: "item-out",
							itemDemo: "item-out", 
							sectContentAct: false
						  })
		var video = document.getElementById("videoCodex");
		video.pause();

	},

	render: function(){	
		
		return (
				<section id="visualisation" data-fadein={this.state.sectFadeIn}>
					<p className="divInfo">Visualization Work</p>
					<section data-name="prog" data-active={this.state.sectWorkAct}>
						<article clasName="pilgrim" data-prop="click" onClick={this.activePilgrim}>
							<div className="placeholder" data-name="itemWork">
								<p>Codex</p>
							   <figure><img src="images/codex.png" alt=""/>
									<figcaption>El codex en ceiec
									</figcaption>		   
							   </figure>
							</div>
						</article>
						<article className="cube" data-prop="click" onClick={this.activeCube}>
							<div className="placeholder" data-name="itemWork">
								 <p>cube</p>
								 <figure><img src="images/cube.png" alt=""/>
										<figcaption>Cube en ceiec
										</figcaption>		   
								   </figure>	
							</div>
						</article>
						<article className="demo" data-prop="click" onClick={this.activeDemo}>
							<div className="placeholder" data-name="itemWork">
								<p>Demoscene</p>
								<figure><img src="images/demo.png" alt=""/>
									<figcaption>Timescratchers demos
									</figcaption>		   
							   </figure>
							</div>		
						</article>
					</section>

					<section data-name="storage" data-active={this.state.sectContentAct}>
						<article className="pilgrim">
							<div id="stCodex" className={this.state.itemPilgrim} data-name="content">
								<div className="crossButton" onClick={this.inactivePilgrim}>X</div>
									 <video id="videoCodex" width="420" height="340" controls>
										  <source src="videos/codex.mp4" type="video/mp4" />
										  Your browser does not support the video tag.
									 </video> 
							</div> 
						</article>
						<article className="cube">
							<div id="stCube" className={this.state.itemCube} data-name="content">
								<div className="crossButton" onClick={this.inactiveCube}>X</div>
								<img src="images/cubeImages.png" alt="Cube image"/>
							</div>
						</article>
						<article className="demo">
							<div id="stDemo" className={this.state.itemDemo} data-name="content">
								<div className="crossButton" onClick={this.inactiveDemo}>X</div>
								<img src="images/demoImages.png" alt="Demoscene image"/>
							</div>
						</article>
					</section>
				</section>

		);
			
	}		
});


///// About Contact section
var Contact = React.createClass({
	
	//////Initialize states
	  getInitialState: function () {
	  	
			return {  sectContactAct: false, data: [],sectFadeIn: false };         //Section id="Contact" activate or inactivate
					 							
	},
	
	//////Activate or inactive section Work state
	activateHandle: function(bool){
		this.setState({ sectContactAct: bool, sectFadeIn: bool })      //If it's called, get the transfered state
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
			<section data-fadein={this.state.sectFadeIn}>
				<p className="divInfo">Contact me</p>
				<section data-active={this.state.sectContactAct}>
	  					<ValueList data={this.state.data} /><br></br>	
				</section>	
			</section>
		);		
	}		
});

var ValueList = React.createClass({
  render: function() {
    var dataNodes = this.props.data.map(function(values) {
	      return (		    	

						<div className="inline">
							<p>{values.id}</p>
						   <figure><img src={values.image} alt=""/>
								<figcaption>{values.contact}
								</figcaption>		   
						   </figure>
						</div>

	      );
	 });
    return (
		<article id="contactMe" className="myContact">
  				{dataNodes}
  		</article>
    );
  }
});


/////Render functions
var initCanvas = ReactDOM.render(<Canvas/>,document.getElementById("canvas"));
ReactDOM.render(<Nav/>,document.getElementById("menu"));
var meRender = ReactDOM.render(<Me/>,document.getElementById("me"));

var workRender = ReactDOM.render(<Work/>,document.getElementById("work"));
var contactRender = ReactDOM.render(<Contact url="data.json"/>,document.getElementById("contact"));

