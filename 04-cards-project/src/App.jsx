import React from 'react';
import { Bookmark, DollarSign } from 'lucide-react';

const App = () => {
  return (
    <div className="parent">

      <div className="card">

        {/* Top */}
        <div className="top">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0LqqItjj6kjPy2bhfx_Cs3kIqIEesiN8aMbEXoL-zw&s"
            alt="Google"
          />

          <button className="save-btn">
            Save
            <Bookmark size={13}  strokeWidth={2} />
          </button>
        </div>

        {/* Center */}
        <div className="center">
          <h3>
            Google <span>30 days ago</span>
          </h3>

          <h2>Graphic Designer</h2>

          <div className="tag">
            <h4>Part-Time</h4>
            <h4>Flexible Schedule</h4>
          </div>
        </div>

        {/* Bottom */}
        <div className="bottom">

          <div className="salary">
            <h2>
              <DollarSign size={20} />
              150-220K
            </h2>

            <p>Kochi, India</p>
          </div>

          <button className="apply-btn">
            Apply now
          </button>

        </div>

      </div>

    </div>
  );
};

export default App;