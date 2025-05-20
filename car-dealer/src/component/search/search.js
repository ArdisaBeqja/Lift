// Component
import '../../component/button/button.scss';

function SearchPages(props) {
  return (
    <>
      <div className="searchpages">
        <form>
          <input
            type="text"
            className="form-control"
            name="search"
            placeholder="Search for pages..."
          />
          <button className="search-button button" type="submit">
            {props?.searchicon && <i className={`${props.searchicon}`}></i>}
            {props?.buttontext && <span>{props.buttontext}</span>}
          </button>
        </form>
      </div>
    </>
  );
}
export default SearchPages;
