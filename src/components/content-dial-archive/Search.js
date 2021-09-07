import React, { useState } from "react";
import slugify from "slugify";

const Search = ({
  search,
  dialCategories,
  selectedCategoires,
  setCategories,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
    search(term);
  };

  return (
    <div className="search-section">
      <div className="search-container">
        <div className="search-inner">
          <div className="search-field">
            <div className="facetwp-facet ">
              <span className="facetwp-input-wrap">
                <i className="facetwp-icon"></i>
                <input
                  type="text"
                  className="facetwp-search"
                  value={searchTerm}
                  placeholder="Search"
                  onChange={(e) => handleSearchTermChange(e.target.value)}
                />
              </span>
            </div>
          </div>
          <div className="search-dropdown">
            <div
              className="facetwp-facet facetwp-facet-content_dial facetwp-type-fselect"
              data-name="content_dial"
              data-type="fselect"
            >
              <div
                className={`fs-wrap multiple fs-default ${
                  isDropdownOpen ? "fs-open" : "fs-close"
                }`}
              >
                <div
                  role='none'
                  className="fs-label-wrap"
                  onClick={() => {
                    toggleDropdown();
                  }}
                >
                  <div className="fs-label"> All </div>
                  <span className="fs-arrow"> </span>
                </div>
                <div
                  className={`fs-dropdown ${isDropdownOpen ? "" : "hidden"}`}
                >
                  <div className="fs-search">
                    <input type="text" placeholder="Search" />
                  </div>
                  <div className="fs-no-results hidden"> No results found </div>
                  <div className="fs-options">
                    {dialCategories.map((category) => {
                      const categorySlug = slugify(category.name);
                      const isSelected = selectedCategoires?.includes(
                        categorySlug
                      );
                      const publisherCount = category.contentDials.nodes.length;

                      return (
                        <div
                          role='none'
                          className="fs-option"
                          onClick={() => {
                            if (!selectedCategoires) {
                              setCategories([categorySlug]);
                              return;
                            }
                            if (isSelected) {
                              setCategories(
                                selectedCategoires.filter(
                                  (category) => category !== categorySlug
                                )
                              );
                            } else {
                              setCategories([
                                ...selectedCategoires,
                                categorySlug,
                              ]);
                            }
                          }}
                        >
                          <span
                            class={`fs-checkbox ${
                              isSelected ? "fs-checkbox-selected" : ""
                            }`}
                          >
                            <i></i>
                          </span>
                          <div class="fs-option-label">
                            {category.name}
                            <span class="facetwp-counter">
                              ({publisherCount})<span></span>
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
