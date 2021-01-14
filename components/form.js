import Link from 'next/link'
export default function Form() {
    return (
        <div className="form-area">
            <div id="errors"></div>
            <form role="search" action="" method="post" id="search-form" name="searchForm">
                <label for="search" class="visuallyhidden">Search for: </label>
                <input type="text" name="search" id="search" required />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}