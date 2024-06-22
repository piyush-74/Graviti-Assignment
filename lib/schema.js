// schema.js

import { z } from 'zod';

export const schema = z.object({
  originName: z.string().min(1, 'Origin is required'),
  destinationName: z.string().min(1, 'Destination is required'),
  waypoints: z.array(
    z.object({
      name: z.string().min(1, 'Stop name is required'),
    })
  ),
});
