import React, { useMemo } from 'react';
import reduce from 'lodash/reduce';
import classnames from 'classnames';
import styles from './index.less';

export interface IProps {
    items: { [key: string]: string },
    activeKey: string,
    className?: string,
    setActiveKey(item: string): void
}

export default function ({ items, activeKey, setActiveKey, className }: IProps): React.ReactNode {
    const onItemClicks = useMemo(() => {
        return reduce(Object.keys(items), (result, key) => {
            result[key] = function () {
                setActiveKey(key);
            }
            return result;
        }, {});
    }, [items, setActiveKey]);

    return (
        <div className={classnames(styles.menu, 'tooltipRoot', className)}>
            {Object.keys(items).map(key => (
                <button
                    key={key}
                    className={classnames(styles.item, 'withTooltip', activeKey === key ? 'primary' : '')}
                    onClick={onItemClicks[key]}
                    type="button"
                >
                    {key}
                    <div className={classnames('tooltip', 'theme')}>
                        {key}
                    </div>
                </button>
            ))}
        </div>
    );
}