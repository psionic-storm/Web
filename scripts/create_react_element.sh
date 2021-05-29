#!/usr/bin/env bash

if [ -z "$*" ]; then
 echo "put argument with ComponentName"
 exit 0

fi

FOLDER="elements"
FILE_NAME=$1
FIRST_CAP="$(tr '[:lower:]' '[:upper:]' <<< ${FOLDER:0:1})${FOLDER:1}"
APPEND=`echo "${FIRST_CAP%?}"`

DEFAULT_STYLED_COMPONENT="export const Container = styled.div\`\`"

echo `mkdir src/${FOLDER}/${FILE_NAME}`

# react file
echo `echo "import React from 'react';
import * as S from './${FILE_NAME}Style';

function ${FILE_NAME}() {
  return (
    <S.Container>
      ${FILE_NAME}
    </S.Container>
  );
}

export default ${FILE_NAME};
" > src/${FOLDER}/${FILE_NAME}/${FILE_NAME}.tsx`

# styled component file
echo `echo "import styled from '@emotion/styled';

${DEFAULT_STYLED_COMPONENT}
" > src/${FOLDER}/${FILE_NAME}/${FILE_NAME}Style.ts`