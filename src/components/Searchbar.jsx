import React from 'react'

const Searchbar = () => {
  return (
    <div>
      <div>
            <form
              action="/search"
              method="get"
              class="flex items-center bg-white rounded-lg bg-opacity-70"
            >
              <input
                type="text"
                name="query"
                placeholder="Search..."
                class="w-full py-2 px-4 bg-white rounded-lg bg-opacity-0 focus:outline-none"
              />
              <button type="submit" class="px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-4.35-4.35M17 10.5A6.5 6.5 0 104.35 4.35a6.5 6.5 0 0012.65 6.15z"
                  />
                </svg>
              </button>
            </form>
          </div>
    </div>
  )
}

export default Searchbar
