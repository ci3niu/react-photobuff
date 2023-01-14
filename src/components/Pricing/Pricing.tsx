import { StyledPricing, StyledPricingItem, StyledPricingItems } from './Pricing.styled';
import { pricingData } from './pricingData';

const Pricing = () => {
	return (
		<StyledPricing>
			<h1>Pricing</h1>
			<StyledPricingItems>
				{pricingData.map((pricing) => (
					<StyledPricingItem key={pricing.id}>
						<div>
							<h2>{pricing.title}</h2>
							<p>
								up to <span>{pricing.price}</span>
							</p>
						</div>
						<div>
							<button>Buy</button>
						</div>
					</StyledPricingItem>
				))}
			</StyledPricingItems>
		</StyledPricing>
	);
};

export default Pricing;
