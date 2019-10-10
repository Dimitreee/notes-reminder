import * as React from 'react';
import { Button, Card, Elevation, IButtonProps, } from '@blueprintjs/core';
import Box from 'src/components/Box';


interface ITemplateCardProps {
    children: JSX.Element,
    controls?: IButtonProps[] | IButtonProps,
}

class TemplateCard extends React.PureComponent<ITemplateCardProps> {
    public render () {
        const { children, controls, } = this.props;

        return (
            <Card elevation={Elevation.ONE} interactive>
                <Box display="flex" flexDirection="row" justifyContent="spaceBetween" alignItems="stretch">
                    <Box flat>
                        {children}
                    </Box>
                    { controls && this.renderControls(controls) }
                </Box>
            </Card>
        )
    }

    private renderControls(controls: IButtonProps[] | IButtonProps) {
        return (
            <Box display="flex" flexDirection="column" justifyContent="flexStart">
                {
                    Array.isArray(controls)
                        ? controls.map((control) => <Button {...control}/>)
                        : <Button {...controls}/>
                }
            </Box>
        )
    }
};

export default TemplateCard;
