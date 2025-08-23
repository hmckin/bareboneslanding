import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ImageIcon } from 'lucide-react';

const CreatePost: React.FC = () => {
  return (
    <Card className="bg-white/60 backdrop-blur-xl border border-white/100 shadow-xl w-full max-w-sm mx-auto">
      <CardContent className="px-6">

            {/* Form */}
            <form className="space-y-3">
              <div>
                <label
                  htmlFor="title"
                  className="block text-xs font-semibold uppercase text-gray-700 dark:text-gray-300 mb-1"
                >
                  TITLE
                </label>
                <Input
                  id="title"
                  placeholder="Your brilliant idea"
                  className="bg-white dark:bg-gray-800 h-8 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-xs font-semibold uppercase text-gray-700 dark:text-gray-300 mb-1"
                >
                  DETAILS
                </label>
                <Textarea
                  id="description"
                  placeholder="Any additional details"
                  rows={2}
                  className="bg-white dark:bg-gray-800 text-sm"
                />
              </div>
              

              {/* Action Bar */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="flex items-center py-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 h-8 w-8 p-0"
                  >
                    <ImageIcon className="w-8 h-8" />
                  </Button>
                </div>

                <Button type="button" className="bg-gray-600 hover:bg-gray-500/90 text-white h-8 px-3 text-sm">
                  CREATE POST
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      );
    };

export default CreatePost;
