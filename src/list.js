import logo from './logo.svg';
import './App.css';

function List(props) {
  return (
    <div className="card" style={{width: '80%', marginLeft:'auto', marginRight:'auto'}}>
    <div className="list-group" >
        <a href="#" className="list-group-item list-group-item-action"><div>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
      </div></a>
        <a href="#" className="list-group-item list-group-item-action list-group-item-primary"><div>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
      </div></a>
        <a href="#" className="list-group-item list-group-item-action list-group-item-secondary"><div>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
      </div></a>
        <a href="#" className="list-group-item list-group-item-action list-group-item-success"><div>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
      </div></a>
        <a href="#" className="list-group-item list-group-item-action list-group-item-danger"><div>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
      </div></a>
        <a href="#" className="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</a>
        <a href="#" className="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a>
        <a href="#" className="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a>
        <a href="#" className="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>
      </div>
  </div>
  );
}

export default List;
