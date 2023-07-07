// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    buildStyles
 
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  
import React, { useState, Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Chart from "react-apexcharts";





import "./HomePage.css"

function HomePage()
{
    const [value, onChange] = useState(new Date());
    const [state, setState]= useState({
        options: {
            chart: {
              id: "basic-bar",
              colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800']

            },
            xaxis: {
              categories: ['Level1','Level2','Level3','Level4','Level5','Level6','Level7']
            }
          },
          

          series: [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 91,20,39]
            }
          ]

    })
    return (
        <div className="conTainer">
            <div className="content1">
                <div className="content1__top">
                    <div className="content1__top-left">
                        <h2 className="top-left__heading">Từ mới</h2>
                        <span className="top-left__num">20</span>
                        <button className="top-left__btn">Học ngay</button>
                    </div>
                    <div className="content1__top-right">
                        <Calendar onChange={onChange} value={value} />
                    </div>
                </div>
                <div className="content1__bot">
                    <h2 className="content1__bot-heading">Từ vựng đã học</h2>
                    <div className="content1__bot-chart">
                        <div className="chart-left">
                            <Chart
                            options={state.options}
                            series={state.series}
                            type="bar"
                            width="800"
                            height="400"
                            />
                        </div>
                        <button className="chart-btn">Ôn ngay</button>
                    </div>
                    

                </div>
            </div>
            <div className="content2">
                <div className="content2__clock">
                    <h2 className="content2__clock-heading">
                        Mục tiêu
                    </h2>
                    <div className="content2__clock-clock">
                        <CircularProgressbar
                            value={10*100/30}
                            text={`10/30`}
                            strokeWidth={9}
                            styles={buildStyles({
                                
                                pathColor: '#3db2ff',
                                textColor: 'black',
                                textSize:'20px',
                                trailColor: '',
                                backgroundColor: 'white',
                                
                            })}
                        />
                    </div>
                </div>
                <div className="content2__img">
                    <h2 className="content2__img-heading">
                        Bạn ơi học đi, đừng chơi nữa
                    </h2>
                    <img className="content2__img-img" src="https://i.pinimg.com/originals/9f/4e/b8/9f4eb8a6adc0414b5c96c8a8c0de7bb8.gif" alt="" />
                </div>
                
                  
            </div>
        </div>
    )
}

export default HomePage;