import './App.css';

function App() {
  return (
    <>
      <div className="overlay"></div>
      <div className="modalCategory">
        <ul className="modalCategoryList"></ul>
        <a id="saveCategory" className="saveCategory">保存する</a>
        <a className="closeBtn">閉じる</a>
      </div>
      <main>
        <div id="nowTime"></div>
        <div className="wheather" id="wheather">
          <h2>今日の天気</h2>
          <p className="currentWeather" id="currentWeather"></p>
          <p className="currentPop" id="currentPop"></p>
        </div>
        <form id="form" className="form">
          <input
            required
            type="text"
            id="input"
            placeholder="やることを入力"
            autoComplete="off"
          />
        </form>

        <form id="category">
          <input
            required
            id="categoryInput"
            className="categoryInput"
            type="text"
            placeholder="カテゴリーを記入"
          />
          <button id="addCategoryButton" className="addCategoryButton">
            カテゴリー追加
          </button>
        </form>

        <h2>カテゴリー一覧</h2>
        <ul className="categoryWrap">
          {/* <li className="categoryList">
            <p>カテゴリーネーム</p>
            <img src="" alt="">
          </li> */}
        </ul>
        <h2>チェックしたカテゴリーのタスクが表示される</h2>
        <ul className="categoryWrapSelected"></ul>

        <ul id="listGroup" className="listGroup"></ul>
        <h2>完了したタスク</h2>
        <ul id="completedListGroup" className="completedListGroup"></ul>
      </main>
    </>
  );
}

export default App;
