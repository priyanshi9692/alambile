import React, {Component} from 'react';
import PropTypes from 'prop-types';

class extra extends Component {

    static propTypes = {
        message: PropTypes.string.isRequired
    };

	onSubmitProfile = (e) => {
		e.preventDefault();
		this.props.history.push("/registersuccess");
		if(Object.entries(this.validate()).length === 0) {
            this.props.history.push("/extra");
        }
	};

    render() {
        return (
            <div className="row justify-content-md-center extrapadding"> 
            <div className="col-md-6 col-md-offset-1">
                    <div className="col-md-4" >
    
                        <h1 className="fontsize-big">Protecting Our Food Partners</h1>
                    </div>
    
                </div>
                <div className="row justify-content-md-center fontdetails">
                    <div className="col-md-6">
                    
                        <div className="col-md-10">
                        <p></p>
                        <p> Millions of pound of food and groceries go to waste each year. To encourage companies and organizations to donate healthy food that would otherwise go to waste, they are protected from criminal and civil liability under the Good Samaritan Food Donation Act.

The Federal Bill Emerson Good Samaritan Food Donation Act
On October 1, 1996, President Clinton signed this act to encourage donation of food and grocery products to non-profit organizations for distribution to individuals in need. This law:

Protects you from liability when you donate to a non-profit organization;
Protects you from civil and criminal liability should the product donated in good faith later cause harm to the recipient;
Standardizes donor liability exposure. You or your legal counsel do not need to investigate liability laws in 50 states; and
Sets a floor of "gross negligence" or intentional misconduct for persons who donate grocery products. According to the new law, gross negligence is defined as "voluntary and conscious conduct by a person with knowledge (at the time of conduct) that the conductis likely to be harmful to the health or well-being of another person."
</p>
                        </ div>
                        
                    </div>
   
                    
                </div>
                <div className="col-md-6 col-md-offset-6">
                <button
					onClick={this.onSubmitProfile}
					className="btn btn-success"
					type="submit"
                        >
                            Acknowledged!
                        </button>
                        </div>
            <hr/>
        </div>
        );
    }
}

export default extra;