import React, { useState } from 'react'
import { Tech } from '../models'
import {
  Box,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'

const useStyles = makeStyles((theme: Theme) => ({
  searchTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
}))

export const SearchArea: React.VFC<{ techs: Tech[] }> = ({ techs }: { techs: Tech[] }) => {
  const classes = useStyles()
  const [tags, setTags] = useState<Map<string, string>>(new Map())
  const [levels, setLevels] = useState<Map<number, boolean>>(new Map())
  const [style, setStyle] = useState<number>()
  const [season, setSeason] = useState<number>()

  const searchOnBlur = (value: string) => {
    const t = techs.find((tech) => tech.name == value)
    if (t != undefined) {
      setTags(new Map(tags.set(t.name, t.id)))
    }
  }

  const tagDelete = (value: string) => {
    tags.delete(value)
    setTags(new Map(tags))
  }

  const selectStyle = (value: number | undefined) => {
    if (value != undefined) {
      setStyle(value)
    }
  }

  const selectSeason = (value: number | undefined) => {
    if (value != undefined) {
      setSeason(value)
    }
  }

  const checkSelectBox = (value: number, checked: boolean) => {
    if (checked) {
      setLevels(new Map(levels.set(value, true)))
    } else {
      levels.delete(value)
      setLevels(new Map(levels))
    }
  }

  return (
    <>
      <Box>
        <Typography variant="subtitle1" className={classes.searchTitle}>
          検索条件
        </Typography>
      </Box>

      {/*キーワード*/}
      <Box>
        {Array.from(tags.keys()).length != 0 ? <Typography variant="subtitle1">選択中</Typography> : <></>}
        {Array.from(tags.keys()).map((k) => (
          <Box mt={1} mr={1} display={'inline-box'} key={k}>
            <Chip label={k} onDelete={() => tagDelete(k)} />
          </Box>
        ))}
      </Box>
      <Box mt={3}>
        <Autocomplete
          id="combo-box-demo"
          options={techs}
          getOptionLabel={(option: Tech) => option.name}
          style={{ width: '100%' }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="キーワードで検索"
              variant="outlined"
              onBlur={(e) => searchOnBlur(e.target.value)}
            />
          )}
        />
      </Box>

      {/*開催形式*/}
      <Box mt={3}>
        <FormControl variant="outlined" style={{ width: '100%' }}>
          <InputLabel id="demo-simple-select-outlined-label">開催形式</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            onChange={(e) => {
              selectStyle(typeof e.target.value === 'number' ? e.target.value : undefined)
            }}
            label="開催形式"
          >
            <MenuItem value="">
              <em>選択なし</em>
            </MenuItem>
            <MenuItem value={0}>就業型</MenuItem>
            <MenuItem value={1}>イベント型</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/*時期*/}
      <Box mt={3}>
        <FormControl variant="outlined" style={{ width: '100%' }}>
          <InputLabel id="demo-simple-select-outlined-label">時期</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            onChange={(e) => {
              selectSeason(typeof e.target.value === 'number' ? e.target.value : undefined)
            }}
            label="時期"
          >
            <MenuItem value="">
              <em>選択なし</em>
            </MenuItem>
            <MenuItem value={0}>春夏（4月〜9月）</MenuItem>
            <MenuItem value={1}>秋冬（10月〜3月）</MenuItem>
            <MenuItem value={2}>通年</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box mt={3}>
        <Typography variant="subtitle1">参加者レベル</Typography>
      </Box>

      {/*参加者レベル*/}
      <Box>
        <Box mt={1}>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox onChange={(e) => checkSelectBox(5, e.target.checked)} color="primary" />}
              label="5. フレームワーク・ライブラリを作ることができる。言語に関する本を出版したことがある"
            />
          </FormGroup>
        </Box>
        <Box mt={1}>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox onChange={(e) => checkSelectBox(4, e.target.checked)} color="primary" />}
              label="4. セキュリティやパフォーマンス、保守性を意識したコーディングができる"
            />
          </FormGroup>
        </Box>
        <Box mt={1}>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox onChange={(e) => checkSelectBox(3, e.target.checked)} color="primary" />}
              label="3. 言語の特性を理解し、適切な処理をコーディングできる"
            />
          </FormGroup>
        </Box>
        <Box mt={1}>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox onChange={(e) => checkSelectBox(2, e.target.checked)} color="primary" />}
              label="2. 基本的な処理について、リファレンスを参照しながらコーディングができる"
            />
          </FormGroup>
        </Box>
        <Box mt={1}>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox onChange={(e) => checkSelectBox(1, e.target.checked)} color="primary" />}
              label="1. 授業・プログラミングスクールなどで触れたことがある"
            />
          </FormGroup>
        </Box>
        <Box mt={1}>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox onChange={(e) => checkSelectBox(0, e.target.checked)} color="primary" />}
              label="0. 未経験"
            />
          </FormGroup>
        </Box>
      </Box>
    </>
  )
}
