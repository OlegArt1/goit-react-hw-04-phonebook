import PropTypes from 'prop-types';
import Css from './Filter.module.css';

export const Filter = ({ filter, onChange }) =>
{
    return (
        <div className={Css.filter}>
            <label className={Css.filter__label}>
                <span className={Css.filter__span_text}>Filter</span>
                <input className={Css.filter__input} type="text" name="filter" value={filter}
                       placeholder="Enter name" onChange={onChange}/>
            </label>
        </div>
    );
};
Filter.propTypes =
{
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};