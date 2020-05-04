import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import { v4 as uuidv4 } from 'uuid';



class ExpenseListFilter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isCalendarFocused: null
        }
    };

    selectHandler = e => {
        const filterType = e.target.value
        if(filterType === 'amount') {
            this.props.onFilterByAmount()
        } else if (filterType === 'date') {
            this.props.onFilterByDate()
        }
    }

    render = () => {

        return (
            <div>
            <input  type="text" 
                    value={this.props.filters.text}
                    onChange={(e) => this.props.onFilterByText(e.target.value)}/>
            <select onChange={this.selectHandler} value={this.props.filters.sortBy}>
                <option value='date'>Date</option>
                <option value='amount'>Amount</option>
            </select>
            <DateRangePicker    startDate={this.props.filters.startDate}
                                startDateId={uuidv4()}
                                endDate={this.props.filters.startDate}
                                endDateId={uuidv4()}
                                numberOfMonths={1}
                                isOutsideRange={() => false}
                                showClearDates={true}
                                onDatesChange={({ startDate, endDate }) => { 
                                                                
                                                                // this.props.onDatesStartChange(startDate); 
                                                                // this.props.onDatesEndChange(endDate)
                                                             }}
                                focusedInput={this.state.isCalendarFocused}
                                onFocusChange={(calFocused) => this.setState({ isCalendarFocused: calFocused})}/>
                                                                
                                
        </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        filters: state.filters
    }  
};


const mapDispatchToProps = dispatch => {
    return {
      onFilterByText: (text) => dispatch(actions.setTextFilter(text)),
      onFilterByAmount: () => dispatch(actions.sortByAmount()),
      onFilterByDate: () => dispatch(actions.sortByDate()),
    //   onDatesStartChange: (startDate) => dispatch(actions.setStartDate(startDate)),
    //   onDatesEndChange: (endDate) => dispatch(actions.setEndDate(endDate))
    }
}
export { ExpenseListFilter }

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter)