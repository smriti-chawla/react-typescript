import * as React from 'react';

// const Count: React.FunctionComponent<{
//     count: number;
// }> = (props) => {
//     return <h1>{props.count}</h1>;
// };
//
// export default Count;

interface Props {
    count?: number; // for providing default values
}


export default class Count extends React.Component<Props> {
    static defaultProps: Props = {
        count: 10
    };
    render() {
        return <h1>{this.props.count}</h1>;

    }
};
