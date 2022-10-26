import React, { FC } from "react";
import { WeatherData } from "../store/types";

interface WeatherProps {
	data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
	const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
	const celsius = (data.main.temp - 273.15).toFixed(2);
	console.log(data.weather[0]);
	return (
		<section className='section has-background-dark has-text-light'>
			<div className='container'>
				<h1
					className='title has-text-centered has-text-light'
					style={{ marginBottom: 50 }}
				>
					{data.name} - {data.sys.country}
				</h1>
				<div className='level' style={{ alignItems: "flex-start" }}></div>
				<div className='level-item has-text-centered has-text-light'>
					<div>
						<p className='heading has-text-light'>
							{data.weather[0].description}
						</p>
						<p className='title has-text-light'>
							<img
								src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
								alt=''
							/>
						</p>
					</div>
				</div>
				<div className='level-item has-text-centered has-text-light'>
					<div>
						<p className='heading has-text-light'>temp</p>
						<div className='title has-text-light'>
							<p className='mb-2 has-text-light'>{celsius}K</p>
							<p className='mb-2 has-text-light'>
								{fahrenheit}
								<sup>&#8457;</sup>
							</p>
							<p>
								{celsius}
								<sup>&#8451;</sup>
							</p>
						</div>
					</div>
				</div>
				<div className='level-item has-text-centered has-text-light'>
					<div>
						<p className='heading has-text-light'>humidity</p>
						<p className='title has-text-light'>{data.main.humidity}</p>
					</div>
				</div>
				<div className='level-item has-text-centered has-text-light'>
					<div>
						<p className='heading has-text-light'>pressure</p>
						<p className='title has-text-light'>{data.main.pressure}</p>
					</div>
				</div>
				<div className='level-item has-text-centered has-text-light'>
					<div>
						<p className='heading has-text-light'>wind</p>
						<p className='title has-text-light'>{data.wind.speed} m/s</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Weather;
