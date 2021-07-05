function getInputArea() {
  return `<div class="inputArea">

        <input type="text" name="noteInput" id="titleInput" placeholder="Title">
        <textarea name="wholeNote" id="wholeNote" cols="30" rows="10" placeholder="Add note here"></textarea>
        <select name="" id="chooseLevel">
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
        </select>
        
        
        <select name="" id="chooseDay">
            <option value="day_1">day 1</option>
            <option value="day_2">day 2</option>
            <option value="day_3">day 3</option>
            <option value="day_4">day 4</option>
            <option value="day_5">day 5</option>
            <option value="day_6">day 6</option>
            <option value="day_7">day 7</option>
            <option value="day_8">day 8</option>
            <option value="day_9">day 9</option>
            <option value="day_10">day 10</option>
            <option value="day_11">day 11</option>
            <option value="day_12">day 12</option>
            <option value="day_13">day 13</option>
            <option value="day_14">day 14</option>
            <option value="day_15">day 15</option>
            <option value="day_16">day 16</option>

        </select>
        <button id="addNoteBtn">Add Note...</button>
    </div>`;
}
export default getInputArea;
