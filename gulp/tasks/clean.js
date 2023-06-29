'use strict';

import {deleteAsync} from 'del';

export const clean = () => {
    return deleteAsync(['build']);
}