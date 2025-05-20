import React from 'react';

// Components
import SearchWidget from '../search';

// Import styles
import './sidebar.scss';
import ArchivesWidget from '../archives';
import CategoriesWidget from '../categories';
import TagsWidget from '../meta-tags';
import RecentPostWidget from '../recent-post';

function SideBar(props) {

  return (
    <>
      <div className={`sidebar ${props.className || ''}`}>
        <SearchWidget className="search-2" title="Search Here" />
        <ArchivesWidget className="widget-links" title="Archives" />
        <CategoriesWidget className="widget-links" title="Categories" />
        <RecentPostWidget title="Recent Posts" totalPost="4" />
        <TagsWidget title="Tags" />
      </div>
    </>
  );
}

function SideBarTwo(props) {
  return (
    <>
      <div className={`sidebar ${props.className || ''}`}>
        <SearchWidget className="search-2" title="Search Here" />
        <ArchivesWidget className="widget-links" title="Archives" />
        <CategoriesWidget className="widget-links" title="Categories" />
        <RecentPostWidget title="Recent Posts" />
        <TagsWidget title="Tags" />
      </div>
    </>
  );
}

export default SideBar;
export { SideBarTwo };
