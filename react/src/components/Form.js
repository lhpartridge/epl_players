const Form =()=> {
    return(
        <>
            <main className="main formMain">
                <div className="container">
                    <div className="row">
                        <h2 className="display-2">Add a player</h2>
                    </div>
                        <form action="" className="player-form" id="playerForm">
                            <div className="row mb-3">
                                <h3 className="display-3">Enter the player's name</h3>
                                <div className="col-auto ">
                                    <label 
                                        htmlFor="fName"
                                        className="form-label"
                                        >First name: 
                                    </label>
                                    <input 
                                        type="text" 
                                        id="fName"
                                        name="fName"
                                        value=''
                                        className="form-control"
                                        // onChange=''
                                        required
                                    />
                                </div>
                                <div className="col-auto ">
                                    <label 
                                        htmlFor="lName"
                                        className="form-label"
                                        >Last name: 
                                    </label>
                                    <input 
                                        type="text" 
                                        id="lName"
                                        name="lName"
                                        value=''
                                        className="form-control"
                                        // onChange=''
                                        required
                                    />
                                </div>
                                <div className="col-auto ">
                                    <label 
                                        htmlFor="alias"
                                        className="form-label"
                                        >Alias: 
                                    </label>
                                    <input 
                                        type="text" 
                                        id="alias"
                                        name="alias"
                                        value=''
                                        className="form-control"
                                        // onChange=''
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <h3 className="display-3">Enter the player's date of birth</h3>
                                <div className="col-auto ">
                                    <label 
                                        htmlFor="birth_year"
                                        className="form-label"
                                        >Year (4 digits): 
                                    </label>
                                    <input 
                                        type="text" 
                                        id="birth_year"
                                        name="birth_year"
                                        value=''
                                        className="form-control"
                                        // onChange=''
                                        required
                                    />
                                </div>
                                <div className="col-auto">
                                    <label htmlFor="birth_month" className="form-label">Month: </label>
                                    <select name="birth_month" id="birth_month" className="form-select">
                                        <option selected>Choose month</option>
                                        <option value="01" className="birth-month text-capitalize">january</option>
                                        <option value="02" className="birth-month text-capitalize">february</option>
                                        <option value="03" className="birth-month text-capitalize">march</option>
                                        <option value="04" className="birth-month text-capitalize">april</option>
                                        <option value="05" className="birth-month text-capitalize">may</option>
                                        <option value="06" className="birth-month text-capitalize">june</option>
                                        <option value="07" className="birth-month text-capitalize">july</option>
                                        <option value="08" className="birth-month text-capitalize">august</option>
                                        <option value="09" className="birth-month text-capitalize">september</option>
                                        <option value="10" className="birth-month text-capitalize">october</option>
                                        <option value="11" className="birth-month text-capitalize">november</option>
                                        <option value="12" className="birth-month text-capitalize">december</option>
                                    </select>
                                </div>
                                <div className="col-auto">
                                    <label htmlFor="birth_day" className="form-label">Day: </label>
                                    <select name="birth_day" id="birth_day" className="form-select">
                                        <option selected>Choose day</option>
                                        <option value="01" className="birth-day text-capitalize">1</option>
                                        <option value="02" className="birth-day text-capitalize">2</option>
                                        <option value="03" className="birth-day text-capitalize">3</option>
                                        <option value="04" className="birth-day text-capitalize">4</option>
                                        <option value="05" className="birth-day text-capitalize">5</option>
                                        <option value="06" className="birth-day text-capitalize">6</option>
                                        <option value="07" className="birth-day text-capitalize">7</option>
                                        <option value="08" className="birth-day text-capitalize">8</option>
                                        <option value="09" className="birth-day text-capitalize">9</option>
                                        <option value="10" className="birth-day text-capitalize">10</option>
                                        <option value="11" className="birth-day text-capitalize">11</option>
                                        <option value="12" className="birth-day text-capitalize">12</option>
                                        <option value="13" className="birth-day text-capitalize">13</option>
                                        <option value="14" className="birth-day text-capitalize">14</option>
                                        <option value="15" className="birth-day text-capitalize">15</option>
                                        <option value="16" className="birth-day text-capitalize">16</option>
                                        <option value="17" className="birth-day text-capitalize">17</option>
                                        <option value="18" className="birth-day text-capitalize">18</option>
                                        <option value="19" className="birth-day text-capitalize">19</option>
                                        <option value="20" className="birth-day text-capitalize">20</option>
                                        <option value="21" className="birth-day text-capitalize">21</option>
                                        <option value="22" className="birth-day text-capitalize">22</option>
                                        <option value="23" className="birth-day text-capitalize">23</option>
                                        <option value="24" className="birth-day text-capitalize">24</option>
                                        <option value="25" className="birth-day text-capitalize">25</option>
                                        <option value="26" className="birth-day text-capitalize">26</option>
                                        <option value="27" className="birth-day text-capitalize">27</option>
                                        <option value="28" className="birth-day text-capitalize">28</option>
                                        <option value="29" className="birth-day text-capitalize">29</option>
                                        <option value="30" className="birth-day text-capitalize">30</option>
                                        <option value="31" className="birth-day text-capitalize">31</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-auto">
                                <label 
                                        htmlFor="birth_city"
                                        className="form-label"
                                        >Birth city: 
                                    </label>
                                    <input 
                                        type="text" 
                                        id="birth_city"
                                        name="birth_city"
                                        value=''
                                        className="form-control"
                                        // onChange=''
                                        required
                                    />
                                </div>
                                <div className="col-auto">
                                <label 
                                        htmlFor="birth_country"
                                        className="form-label"
                                        >Birth country: 
                                    </label>
                                    <input 
                                        type="text" 
                                        id="birth_country"
                                        name="birth_country"
                                        value=''
                                        className="form-control"
                                        // onChange=''
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                            <h3 className="display-3">Enter the player's information</h3>
                                <div className="col-auto">
                                    <label 
                                        htmlFor="positions"
                                        className="form-label"
                                        >Position(s) played (separate by commas): 
                                    </label>
                                    <input 
                                        type="text" 
                                        id="positions"
                                        name="positions"
                                        value=''
                                        className="form-control"
                                        // onChange=''
                                    />
                                </div>
                            {/* </div>
                            <div className="row mb-3"> */}
                                <div className="col-auto">
                                    <label htmlFor="status" className="form-label">Current status: </label>
                                    <select 
                                        name="status" 
                                        id="status" 
                                        className="form-select"
                                        // onChange=''
                                    >
                                    <option selected>Choose status</option>
                                    <option value="EPL Player" className="status text-capitalize">EPL Player</option>
                                    <option value="non-EPL Player" className="status text-capitalize">non-EPL Player</option>
                                    <option value="Retired" className="status text-capitalize">Retired</option>
                                    <option value="Deceased" className="status text-capitalize">Deceased</option>
                                    </select>
                                </div>
                                <div className="col-auto">
                                    <label 
                                        htmlFor="current_team"
                                        className="form-label"
                                        >Current Team: 
                                    </label>
                                    <input 
                                        type="text" 
                                        id="current_team"
                                        name="current_team"
                                        value=''
                                        className="form-control"
                                        // onChange=''
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label 
                                        htmlFor="fun_fact"
                                        className="form-label"
                                        >Fun Fact: 
                                    </label>
                                    <textarea 
                                        name="fun_fact" 
                                        className="form-control" 
                                        id="fun_fact" 
                                        rows="4" cols="50"
                                        placeholder="Add a fun fact about this player"
                                        ></textarea>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <button 
                                        type="submit" 
                                        className="btn btn-info">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                </div>
            </main>
        </>
    )
}

export default Form