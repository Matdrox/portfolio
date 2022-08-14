const Button = (props) => {
	return (
		<button
			className={`bg-purple-600 w-36 h-14 rounded-lg shadow-lg shadow-purple-600/30 flex items-center justify-center
      transition ease-in-out duration-400 
      hover:bg-orange-400 hover:shadow-orange-400/30`}
			style={{
				width: `${props.width}`,
				height: `${props.height}`,
			}}
			onClick={props.onClick}
		>
			<p className='text-white pointer-events-none'>{props.text}</p>
		</button>
	);
};

export default Button;
