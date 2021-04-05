import './Menu.css';

let f=0;

		
		function togglemenu()
		{var menuList=document.querySelector("#menuList");
			if(f===0)
			{
				menuList.classList.add('maxWidth-increase')
				menuList.classList.add('paddingLeft-increase');
				f=1;
			}
			else
			{
				menuList.classList.add('maxWidth-decrease')
				menuList.classList.add('paddingLeft-decrease');
				f=0;
			}
		}

function Menu(props)
{
	let f=0;

		
		function togglemenu()
		{var menuList=document.querySelector("#menuList");
		 console.log('cpming: ')
		 // debugger;
			if(f===0)
			{
				menuList.classList.remove('maxWidth-decrease')
				menuList.classList.remove('paddingLeft-decrease');
				menuList.classList.add('maxWidth-increase')
				menuList.classList.add('paddingLeft-increase');
				f=1;
			}
			else
			{
				menuList.classList.remove('maxWidth-increase')
				menuList.classList.remove('paddingLeft-increase');
				menuList.classList.add('maxWidth-decrease')
				menuList.classList.add('paddingLeft-decrease');
				f=0;
			}
		}

	return(
	       <div>
		       <nav>
					<ul id="menuList" class="maxWidth-decrease paddingLeft-decrease">
						<li><p onClick={props.onOpenPanel}>Open Lyrics Panel</p></li>
						<li><p onClick={props.onRepeat}>{`Repeat: ${props.repeat}`}</p></li>
						<li><p onClick={props.onQuality}>{`Quality: ${props.quality}`}</p></li>
						
					</ul>
				</nav>
				<p class="menu-icon" onClick={togglemenu}>{'\u2630'}</p>
			</div>
	    )
}

export default Menu;