import { number, object, preprocess, string, TypeOf } from 'zod';

//ZOD Validation Create Rack

export const createRackSchema = object({
  name: string({
    required_error: 'name is required',
  }).min(1),
  floor: preprocess(
    (floorString) => parseInt(floorString as string, 10),
    number({
      required_error: 'floor is required',
      invalid_type_error: 'floor must be a number',
    }).positive()
  ),
});

//input to validate

export type createRackInput = TypeOf<typeof createRackSchema>;
