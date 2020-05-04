import React, {Component} from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import numeral from 'numeral';



class ExpenseForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            description: this.props.expense ? this.props.expense.description : '',
            amount: this.props.expense ? numeral(this.props.expense.amount / 100).format('0,0.00') : '',
            note: this.props.expense ? this.props.expense.note : '',
            isCalendarFocused: false,
            createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
            error: ''
        }
    }

    onAmountChange = e => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(({ amount }));
        }
    };
            
    onDescriptionChange = e => {
        const description = e.target.value;
        this.setState(({ description }));
    };

    onNoteChange = e => {
        const note = e.target.value;
        this.setState(({ note }));
    };

    onDateChange = createdAt => {
        if (createdAt) {
            this.setState(({ createdAt }))
        }    
    };

    onFocusChange = ({ focused }) => {
        this.setState(({ isCalendarFocused: focused}))
    };

    onSubmit = e => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(({ error: 'Please provide descripition and amount'}))
        } else {
            this.setState(({ error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
                <input  type="text"
                        value={this.state.description}
                        placeholder="Desription"
                        onChange={this.onDescriptionChange}/>
                <input  type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}/>
                <SingleDatePicker   date={this.state.createdAt}
                                    onDateChange={this.onDateChange}
                                    focused={this.state.isCalendarFocused}
                                    onFocusChange={this.onFocusChange}
                                    numberOfMonths={1}
                                    isOutsideRange={() => false}/>
                <textarea   value={this.state.note}
                            onChange={this.onNoteChange}
                            placeholder="Add the note for your expenses (optional)">
                </textarea>
                <button>Add Expense</button>
            </form>
        </div>
        )   
    }
};

export default ExpenseForm
