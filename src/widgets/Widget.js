import React from 'react'
import widgets from './widgets.css'


const Widget = (props) => {
  const {header, counter, comment, icon, chart,large} = props;
  return (
    <div className="Widgets">
        <div className={`${large ? "large-card" : "Cards"}`}>
              <div className={`${large ? "large-top" : "left"}`}>
                <span className="title">{header}</span>
                {counter && <span className="counter">{counter}</span>}
                {comment && <span className="comment">{comment}</span>}
              </div>
              <div className={`${large ? "large-bottom" : "right"}`}>
                {icon && <div className="icon">{icon}</div>}
               {chart && <div className="chart">{chart}</div>}
              </div>
        </div>
    </div>
  )
}

export default Widget