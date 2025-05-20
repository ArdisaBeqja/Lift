import './style.scss';

import LoaderImg from '../../assets/images/loader.gif';

function Loader() {
  return (
    <>
      <div id="loading">
        <div id="loading-center">
          <img src={LoaderImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default Loader;
