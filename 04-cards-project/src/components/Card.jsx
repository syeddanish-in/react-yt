import React from 'react'
import { Bookmark, DollarSign } from 'lucide-react';

const Card = (props) => {
    return (
        <div>
            <div className="card">

                {/* Top */}
                <div className="top">
                    <img
                        src={props.brandLogo}
                        alt="company_logo"
                    />

                    <button className="save-btn">
                        Save
                        <Bookmark size={13} strokeWidth={2} />
                    </button>
                </div>

                {/* Center */}
                <div className="center">
                    <h3>
                        {props.companyName} <span>{props.datePosted}</span>
                    </h3>

                    <h2>{props.post}</h2>

                    <div className="tag">
                        <h4>{props.tag1}</h4>
                        <h4>{props.tag2}</h4>
                    </div>
                </div>

                {/* Bottom */}
                <div className="bottom">

                    <div className="salary">
                        <h2>
                            {/* <DollarSign size={20} /> */}
                            {props.pay}
                        </h2>

                        <p>{props.location}</p>
                    </div>

                    <button className="apply-btn">
                        Apply now
                    </button>

                </div>

            </div>
        </div>
    )
}

export default Card
